"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Teams from "@/pages/Teams";

export default function TeamsPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <Teams />
    </ProtectedRoute>
  );
}
