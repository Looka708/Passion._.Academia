
"use client";

import { ReactNode, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
    children: ReactNode;
    adminOnly?: boolean;
}

export function ProtectedRoute({ children, adminOnly = false }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push('/signin');
      } else if (adminOnly && user?.role !== 'admin') {
        router.push('/'); // Redirect non-admins from admin routes
      }
    }
  }, [isLoading, isAuthenticated, user, adminOnly, router]);

  if (isLoading || !isAuthenticated || (adminOnly && user?.role !== 'admin')) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading...</p>
        </div>
    );
  }

  return <>{children}</>;
}
