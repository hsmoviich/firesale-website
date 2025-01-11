import { Badge } from "@/components/ui/badge"

type PropertyStatusProps = {
  status: string
}

export function PropertyStatus({ status }: PropertyStatusProps) {
  let color: "default" | "secondary" | "destructive" | "outline" = "default"
  
  switch (status.toLowerCase()) {
    case "active":
      color = "default"
      break
    case "pending":
      color = "secondary"
      break
    case "sold":
      color = "destructive"
      break
    default:
      color = "outline"
  }

  return <Badge variant={color}>{status}</Badge>
}

