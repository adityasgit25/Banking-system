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
const branches = [
  { branchId: "BR001", location: "Downtown", bankId: "B001", bankName: "Global Bank" },
  { branchId: "BR002", location: "Uptown", bankId: "B001", bankName: "Global Bank" },
  { branchId: "BR003", location: "West Side", bankId: "B002", bankName: "City Trust Bank" },
  { branchId: "BR004", location: "Financial District", bankId: "B003", bankName: "National Finance" },
  { branchId: "BR005", location: "Harbor View", bankId: "B004", bankName: "Metro Banking Corp" },
  { branchId: "BR006", location: "Eastside Mall", bankId: "B002", bankName: "City Trust Bank" },
  { branchId: "BR007", location: "North County", bankId: "B005", bankName: "United Financial" },
]

export default function BranchesPage() {
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

  const filteredBranches = branches.filter(
    (branch) =>
      branch.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.bankName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader onSignOut={handleSignOut} />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Branches</h1>
            <Button>Add New Branch</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Branch Management</CardTitle>
              <CardDescription>View and manage all bank branches in the system</CardDescription>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search branches..."
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
                    <TableHead>Branch ID</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Bank</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBranches.map((branch) => (
                    <TableRow key={branch.branchId}>
                      <TableCell>{branch.branchId}</TableCell>
                      <TableCell>{branch.location}</TableCell>
                      <TableCell>
                        {branch.bankName} ({branch.bankId})
                      </TableCell>
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

