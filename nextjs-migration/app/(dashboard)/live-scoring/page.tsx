"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import LiveScoring from "@/pages/LiveScoring";

export default function LiveScoringPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <LiveScoring />
    </ProtectedRoute>
  );
}
