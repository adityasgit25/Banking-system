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
import { Badge } from "@/components/ui/badge"

// Sample data
const employees = [
  {
    employeeId: "E001",
    name: "David Miller",
    role: "Branch Manager",
    branchId: "BR001",
    branchName: "Downtown",
  },
  {
    employeeId: "E002",
    name: "Lisa Chen",
    role: "Loan Officer",
    branchId: "BR001",
    branchName: "Downtown",
  },
  {
    employeeId: "E003",
    name: "James Wilson",
    role: "Teller",
    branchId: "BR002",
    branchName: "Uptown",
  },
  {
    employeeId: "E004",
    name: "Patricia Garcia",
    role: "Branch Manager",
    branchId: "BR003",
    branchName: "West Side",
  },
  {
    employeeId: "E005",
    name: "Robert Taylor",
    role: "Financial Advisor",
    branchId: "BR004",
    branchName: "Financial District",
  },
  {
    employeeId: "E006",
    name: "Susan Martinez",
    role: "Teller",
    branchId: "BR001",
    branchName: "Downtown",
  },
  {
    employeeId: "E007",
    name: "Thomas Anderson",
    role: "IT Specialist",
    branchId: "BR005",
    branchName: "Harbor View",
  },
  {
    employeeId: "E008",
    name: "Jessica Brown",
    role: "Customer Service",
    branchId: "BR006",
    branchName: "Eastside Mall",
  },
]

export default function EmployeesPage() {
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
  const [roleFilter, setRoleFilter] = useState("")

  const filteredEmployees = employees.filter(
    (employee) =>
      (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (roleFilter === "" || employee.role === roleFilter),
  )

  const uniqueRoles = [...new Set(employees.map((employee) => employee.role))]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader onSignOut={handleSignOut} />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Employees</h1>
            <Button>Add New Employee</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Employee Management</CardTitle>
              <CardDescription>View and manage all employees in the system</CardDescription>
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Search employees..."
                  className="w-full p-2 border rounded"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                  <label className="block text-sm font-medium mb-1">Filter by Role:</label>
                  <select
                    className="w-full p-2 border rounded"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                  >
                    <option value="">All Roles</option>
                    {uniqueRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Branch</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees.map((employee) => (
                    <TableRow key={employee.employeeId}>
                      <TableCell>{employee.employeeId}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>
                        <Badge variant={employee.role === "Branch Manager" ? "default" : "outline"}>
                          {employee.role}
                        </Badge>
                      </TableCell>
                      <TableCell>{employee.branchName}</TableCell>
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

