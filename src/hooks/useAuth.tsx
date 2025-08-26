
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { verifyUserInSheet } from '@/app/actions';

interface User {
    name: string;
    email: string;
    course: string;
    role: string;
    active: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('passion-academia-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem('passion-academia-user');
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const result = await verifyUserInSheet(email, password);
    if (result.success && result.name && result.email && result.course && result.role && result.active !== undefined) {
      if (!result.active) {
        throw new Error("Your account is inactive. Please contact an administrator.");
      }

      const userData: User = {
        name: result.name,
        email: result.email,
        course: result.course,
        role: result.role,
        active: result.active,
      };
      setUser(userData);
      localStorage.setItem('passion-academia-user', JSON.stringify(userData));
      if (userData.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } else {
      throw new Error("Invalid email or password.");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('passion-academia-user');
    router.push('/signin');
  };

  const value = { 
    user, 
    isAuthenticated: !!user, 
    isLoading, 
    login, 
    logout
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
