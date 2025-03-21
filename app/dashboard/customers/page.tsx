"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Eye, Edit, Trash2 } from "lucide-react"

// Sample data
const customers = [
  {
    customerId: "C001",
    name: "John Smith",
    address: "123 Main St, Apt 4B, New York, NY 10001",
    phoneNo: "212-555-1234",
    branchId: "BR001",
    branchName: "Downtown",
  },
  {
    customerId: "C002",
    name: "Emily Johnson",
    address: "456 Park Ave, Chicago, IL 60601",
    phoneNo: "312-555-6789",
    branchId: "BR003",
    branchName: "West Side",
  },
  {
    customerId: "C003",
    name: "Michael Brown",
    address: "789 Ocean Blvd, Miami, FL 33139",
    phoneNo: "305-555-4321",
    branchId: "BR007",
    branchName: "North County",
  },
  {
    customerId: "C004",
    name: "Sarah Davis",
    address: "101 Tech Way, San Francisco, CA 94105",
    phoneNo: "415-555-7890",
    branchId: "BR004",
    branchName: "Financial District",
  },
  {
    customerId: "C005",
    name: "Robert Wilson",
    address: "202 Lake St, Seattle, WA 98101",
    phoneNo: "206-555-3456",
    branchId: "BR005",
    branchName: "Harbor View",
  },
  {
    customerId: "C006",
    name: "Jennifer Lee",
    address: "303 Hill Rd, Boston, MA 02108",
    phoneNo: "617-555-8901",
    branchId: "BR002",
    branchName: "Uptown",
  },
]

export default function CustomersPage() {
  const router = useRouter()
  const { toast } = useToast()

  const handleSignOut = () => {
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    })
    router.push("/")
  }

  const [searchTerm, setSearchTerm] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phoneNo.includes(searchTerm),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader onSignOut={handleSignOut} />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Customers</h1>
            <Button>Add New Customer</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>View and manage all customers in the system</CardDescription>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="w-full p-2 border rounded"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Phone Number</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.map((customer) => (
                      <TableRow key={customer.customerId}>
                        <TableCell>{customer.customerId}</TableCell>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{customer.address}</TableCell>
                        <TableCell>{customer.phoneNo}</TableCell>
                        <TableCell>{customer.branchName}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

