"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import SuperAdminDashboard from "@/pages/SuperAdminDashboard";

export default function SuperAdminPage() {
  return (
    <ProtectedRoute requiredRole="superadmin">
      <SuperAdminDashboard />
    </ProtectedRoute>
  );
}
