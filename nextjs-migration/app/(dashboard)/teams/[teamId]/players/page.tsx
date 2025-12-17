"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Players from "@/pages/Players";

export default function PlayersPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <Players />
    </ProtectedRoute>
  );
}
