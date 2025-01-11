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

const clients = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-555-5555" },
  // Add more clients as needed
]

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Clients</h1>
        <Button>Add New Client</Button>
      </div>
      <div className="flex items-center space-x-2">
        <Input className="max-w-sm" placeholder="Search clients..." />
        <Button variant="outline">Search</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
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

