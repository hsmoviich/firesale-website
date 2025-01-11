import { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { AdminPropertyList } from "@/components/admin-property-list"

export const metadata: Metadata = {
  title: "Admin Properties",
  description: "Manage all properties in the system",
}

export default function AdminPropertiesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Properties" text="Manage all properties in the system.">
        <Button>Add New Property</Button>
      </DashboardHeader>
      <AdminPropertyList />
    </DashboardShell>
  )
}

