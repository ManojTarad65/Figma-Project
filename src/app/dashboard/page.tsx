
"use client"

import { useAppContext } from "@/store/app-context"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import Hero from "@/components/sections/Hero" // Reusing Hero as the dashboard for now

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
  const { permissions } = useAppContext()
  const viewType = permissions?.view_type

  // Dynamic rendering logic
  switch (viewType) {
    case "individual_client_dashboard":
      return <Hero /> // Using existing Hero component as requested

    // Future cases can be added here
    // case "admin_dashboard": return <AdminDashboard />

    default:
      return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
          <p className="text-xl">Tipo de vista desconocido: {viewType}</p>
        </div>
      )
  }
}
