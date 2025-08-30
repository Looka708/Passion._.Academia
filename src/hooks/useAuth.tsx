
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { verifyUserInSheet, addUserToSheet } from '@/app/actions';
import { auth } from '@/lib/firebase/config';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User as FirebaseUser } from 'firebase/auth';
import { getUserByEmail } from '@/lib/data/users';
import type { User } from '@/lib/data/users';

interface AuthContextType {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setFirebaseUser(firebaseUser);
      if (firebaseUser) {
        // If user is logged in with Firebase, fetch their profile from Firestore
        const userProfile = await getUserByEmail(firebaseUser.email!);
        setUser(userProfile);
        localStorage.setItem('passion-academia-user', JSON.stringify(userProfile));
      } else {
        // If not logged in, clear user data
        setUser(null);
        localStorage.removeItem('passion-academia-user');
      }
      setIsLoading(false);
    });

    // Fallback for non-Firebase Auth users (like the default admin)
    if (!firebaseUser) {
        try {
          const storedUser = localStorage.getItem('passion-academia-user');
          if (storedUser) {
            const parsedUser: User = JSON.parse(storedUser);
            // Simple check if it's the admin user to avoid conflicts
            if(parsedUser.role === 'admin') {
                setUser(parsedUser);
            }
          }
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
            localStorage.removeItem('passion-academia-user');
        }
        setIsLoading(false);
    }


    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    // First, try to sign in with Firebase Auth
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userProfile = await getUserByEmail(userCredential.user.email!);
        
        // Admins can always log in, regular users must be active
        if (userProfile?.role !== 'admin' && !userProfile?.active) {
            await signOut(auth);
            throw new Error("Your account is inactive. Please contact an administrator.");
        }

        setUser(userProfile);
        localStorage.setItem('passion-academia-user', JSON.stringify(userProfile));
         if (userProfile?.role === 'admin') {
            router.push('/admin');
        } else {
            router.push('/');
        }
        return;
    } catch (error: any) {
         // If Firebase Auth fails, check against the custom admin user in Firestore
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
             const result = await verifyUserInSheet(email, password);
             if (result.success && result.name && result.email && result.course && result.role) {
                // Admin role check allows login regardless of active status for the default admin
                if (result.role !== 'admin' && !result.active) {
                    throw new Error("Your account is inactive. Please contact an administrator.");
                }

                const userData: User = {
                    name: result.name,
                    email: result.email,
                    password: '', // Don't store password in context
                    course: result.course,
                    role: result.role,
                    active: result.active ?? true, // Default to active
                };
                setUser(userData);
                localStorage.setItem('passion-academia-user', JSON.stringify(userData));
                if (userData.role === 'admin') {
                    router.push('/admin');
                } else {
                    router.push('/');
                }
                return;
            }
        }
        console.error("Login error:", error);
        throw new Error(error.message || "Invalid email or password.");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setFirebaseUser(null);
    localStorage.removeItem('passion-academia-user');
    router.push('/signin');
  };

  const value = { 
    user, 
    firebaseUser,
    isAuthenticated: !!user || !!firebaseUser, 
    isLoading, 
    login,
    logout,
   };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
