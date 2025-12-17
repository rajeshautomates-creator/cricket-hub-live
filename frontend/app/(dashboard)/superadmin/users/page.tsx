"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import SuperAdminUsers from "@/pages/superadmin/Users";

export default function UsersPage() {
  return (
    <ProtectedRoute requiredRole="superadmin">
      <SuperAdminUsers />
    </ProtectedRoute>
  );
}
