"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Eye, Edit, Trash2, ArrowUpDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample data
const accounts = [
  {
    accountId: "A001",
    type: "Savings",
    branchId: "BR001",
    branchName: "Downtown",
    customerId: "C001",
    customerName: "John Smith",
    balance: 5250.75,
  },
  {
    accountId: "A002",
    type: "Checking",
    branchId: "BR001",
    branchName: "Downtown",
    customerId: "C001",
    customerName: "John Smith",
    balance: 1820.5,
  },
  {
    accountId: "A003",
    type: "Savings",
    branchId: "BR003",
    branchName: "West Side",
    customerId: "C002",
    customerName: "Emily Johnson",
    balance: 12500.0,
  },
  {
    accountId: "A004",
    type: "Fixed Deposit",
    branchId: "BR004",
    branchName: "Financial District",
    customerId: "C004",
    customerName: "Sarah Davis",
    balance: 25000.0,
  },
  {
    accountId: "A005",
    type: "Checking",
    branchId: "BR005",
    branchName: "Harbor View",
    customerId: "C005",
    customerName: "Robert Wilson",
    balance: 3750.25,
  },
  {
    accountId: "A006",
    type: "Loan",
    branchId: "BR002",
    branchName: "Uptown",
    customerId: "C006",
    customerName: "Jennifer Lee",
    balance: -15000.0,
  },
  {
    accountId: "A007",
    type: "Credit Card",
    branchId: "BR007",
    branchName: "North County",
    customerId: "C003",
    customerName: "Michael Brown",
    balance: -2500.0,
  },
]

export default function AccountsPage() {
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
  const [typeFilter, setTypeFilter] = useState("")
  const [sortField, setSortField] = useState("accountId")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const filteredAccounts = accounts
    .filter(
      (account) =>
        (account.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          account.accountId.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (typeFilter === "" || account.type === typeFilter),
    )
    .sort((a, b) => {
      if (sortField === "balance") {
        return sortDirection === "asc" ? a.balance - b.balance : b.balance - a.balance
      } else if (sortField === "accountId") {
        return sortDirection === "asc" ? a.accountId.localeCompare(b.accountId) : b.accountId.localeCompare(a.accountId)
      } else if (sortField === "customerName") {
        return sortDirection === "asc"
          ? a.customerName.localeCompare(b.customerName)
          : b.customerName.localeCompare(a.customerName)
      }
      return 0
    })

  const uniqueTypes = [...new Set(accounts.map((account) => account.type))]

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader onSignOut={handleSignOut} />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Accounts</h1>
            <Button>Add New Account</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Account Management</CardTitle>
              <CardDescription>View and manage all accounts in the system</CardDescription>
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Search accounts..."
                  className="w-full p-2 border rounded"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                  <label className="block text-sm font-medium mb-1">Filter by Type:</label>
                  <select
                    className="w-full p-2 border rounded"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">All Types</option>
                    {uniqueTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("accountId")}>
                        <div className="flex items-center">
                          Account ID
                          {sortField === "accountId" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                        </div>
                      </TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("customerName")}>
                        <div className="flex items-center">
                          Customer
                          {sortField === "customerName" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                        </div>
                      </TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("balance")}>
                        <div className="flex items-center">
                          Balance
                          {sortField === "balance" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                        </div>
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAccounts.map((account) => (
                      <TableRow key={account.accountId}>
                        <TableCell>{account.accountId}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              account.type === "Loan" || account.type === "Credit Card"
                                ? "destructive"
                                : account.type === "Fixed Deposit"
                                  ? "default"
                                  : "outline"
                            }
                          >
                            {account.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{account.customerName}</TableCell>
                        <TableCell>{account.branchName}</TableCell>
                        <TableCell className={account.balance < 0 ? "text-red-500" : "text-green-600"}>
                          ${account.balance.toFixed(2)}
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
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

