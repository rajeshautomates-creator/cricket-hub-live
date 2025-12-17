"use client";

import { ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'admin' | 'superadmin' | 'viewer';
  requireSubscription?: boolean;
}

const ProtectedRoute = ({
  children,
  requiredRole,
  requireSubscription = false
}: ProtectedRouteProps) => {
  const { user, role, loading, hasActiveSubscription, isAdmin, isSuperAdmin } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push(`/login?from=${encodeURIComponent(pathname || '/')}`);
        return;
      }

      if (requiredRole) {
        if (requiredRole === 'superadmin' && !isSuperAdmin) {
          router.push('/matches');
          return;
        }
        if (requiredRole === 'admin' && !isAdmin) {
          router.push('/matches');
          return;
        }
      }

      if (requireSubscription && !hasActiveSubscription && !isAdmin) {
        router.push(`/subscribe?from=${encodeURIComponent(pathname || '/')}`);
        return;
      }
    }
  }, [loading, user, requiredRole, hasActiveSubscription, isAdmin, isSuperAdmin, router, pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // If redirecting, don't show children.
  // The useEffect handles the redirect, but we prevent flash of content/errors here.
  // Ideally checks would be synchronous or we'd have a 'checking' state, 
  // but since hooks are used, we rely on the effect.
  if (!user || (requiredRole && ((requiredRole === 'superadmin' && !isSuperAdmin) || (requiredRole === 'admin' && !isAdmin))) || (requireSubscription && !hasActiveSubscription && !isAdmin)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
