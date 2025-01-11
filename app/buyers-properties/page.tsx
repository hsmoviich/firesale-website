import { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PropertyList } from "@/components/property-list"

export const metadata: Metadata = {
  title: "Properties",
  description: "View and manage your saved properties",
}

export default function BuyersPropertiesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Properties" text="View and manage your saved properties.">
      </DashboardHeader>
      <PropertyList />
    </DashboardShell>
  )
}

