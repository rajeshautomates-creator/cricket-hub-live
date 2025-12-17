"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import ScheduleMatch from "@/pages/ScheduleMatch";

export default function ScheduleMatchPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <ScheduleMatch />
    </ProtectedRoute>
  );
}
