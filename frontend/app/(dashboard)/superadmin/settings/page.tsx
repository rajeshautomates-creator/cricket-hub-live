"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import SuperAdminSettings from "@/pages/superadmin/Settings";

export default function SettingsPage() {
  return (
    <ProtectedRoute requiredRole="superadmin">
      <SuperAdminSettings />
    </ProtectedRoute>
  );
}
