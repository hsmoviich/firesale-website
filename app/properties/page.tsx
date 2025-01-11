import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { PropertyStatus } from "@/components/property-status"

const properties = [
  { id: 1, address: "123 Main St", price: "$250,000", status: "Active" },
  { id: 2, address: "456 Elm St", price: "$300,000", status: "Pending" },
  { id: 3, address: "789 Oak St", price: "$200,000", status: "Sold" },
  // Add more properties as needed
]

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Properties</h1>
        <Button>Add New Property</Button>
      </div>
      <div className="flex items-center space-x-2">
        <Input className="max-w-sm" placeholder="Search properties..." />
        <Button variant="outline">Search</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell>{property.address}</TableCell>
              <TableCell>{property.price}</TableCell>
              <TableCell>
                <PropertyStatus status={property.status} />
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

