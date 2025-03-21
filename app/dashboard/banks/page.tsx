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
const banks = [
  { bankId: "B001", name: "Global Bank", address: "123 Financial St, New York, NY 10001" },
  { bankId: "B002", name: "City Trust Bank", address: "456 Commerce Ave, Chicago, IL 60601" },
  { bankId: "B003", name: "National Finance", address: "789 Market St, San Francisco, CA 94103" },
  { bankId: "B004", name: "Metro Banking Corp", address: "101 Main St, Boston, MA 02108" },
  { bankId: "B005", name: "United Financial", address: "202 Wall St, Miami, FL 33131" },
]

export default function BanksPage() {
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

  const filteredBanks = banks.filter(
    (bank) =>
      bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bank.address.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader onSignOut={handleSignOut} />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Banks</h1>
            <Button>Add New Bank</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Bank Management</CardTitle>
              <CardDescription>View and manage all banks in the system</CardDescription>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search banks..."
                  className="w-full p-2 border rounded"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bank ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBanks.map((bank) => (
                    <TableRow key={bank.bankId}>
                      <TableCell>{bank.bankId}</TableCell>
                      <TableCell>{bank.name}</TableCell>
                      <TableCell>{bank.address}</TableCell>
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
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

