"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Eye, ArrowUpDown, Calendar, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample data
const transactions = [
  {
    transactionId: "T001",
    date: "2025-03-15",
    amount: 500.0,
    type: "Deposit",
    accountId: "A001",
    accountType: "Savings",
    customerName: "John Smith",
  },
  {
    transactionId: "T002",
    date: "2025-03-14",
    amount: 200.0,
    type: "Withdrawal",
    accountId: "A002",
    accountType: "Checking",
    customerName: "John Smith",
  },
  {
    transactionId: "T003",
    date: "2025-03-14",
    amount: 1000.0,
    type: "Deposit",
    accountId: "A003",
    accountType: "Savings",
    customerName: "Emily Johnson",
  },
  {
    transactionId: "T004",
    date: "2025-03-13",
    amount: 150.0,
    type: "Withdrawal",
    accountId: "A002",
    accountType: "Checking",
    customerName: "John Smith",
  },
  {
    transactionId: "T005",
    date: "2025-03-12",
    amount: 5000.0,
    type: "Deposit",
    accountId: "A004",
    accountType: "Fixed Deposit",
    customerName: "Sarah Davis",
  },
  {
    transactionId: "T006",
    date: "2025-03-12",
    amount: 300.0,
    type: "Payment",
    accountId: "A006",
    accountType: "Loan",
    customerName: "Jennifer Lee",
  },
  {
    transactionId: "T007",
    date: "2025-03-11",
    amount: 250.0,
    type: "Payment",
    accountId: "A007",
    accountType: "Credit Card",
    customerName: "Michael Brown",
  },
  {
    transactionId: "T008",
    date: "2025-03-10",
    amount: 1200.0,
    type: "Transfer",
    accountId: "A005",
    accountType: "Checking",
    customerName: "Robert Wilson",
  },
  {
    transactionId: "T009",
    date: "2025-03-10",
    amount: 1200.0,
    type: "Transfer",
    accountId: "A003",
    accountType: "Savings",
    customerName: "Emily Johnson",
  },
  {
    transactionId: "T010",
    date: "2025-03-09",
    amount: 75.5,
    type: "Withdrawal",
    accountId: "A005",
    accountType: "Checking",
    customerName: "Robert Wilson",
  },
]

export default function TransactionsPage() {
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
  const [dateFilter, setDateFilter] = useState("")
  const [sortField, setSortField] = useState("date")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const filteredTransactions = transactions
    .filter(
      (transaction) =>
        (transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.accountId.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (typeFilter === "" || transaction.type === typeFilter) &&
        (dateFilter === "" || transaction.date === dateFilter),
    )
    .sort((a, b) => {
      if (sortField === "amount") {
        return sortDirection === "asc" ? a.amount - b.amount : b.amount - a.amount
      } else if (sortField === "date") {
        return sortDirection === "asc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
      } else if (sortField === "transactionId") {
        return sortDirection === "asc"
          ? a.transactionId.localeCompare(b.transactionId)
          : b.transactionId.localeCompare(a.transactionId)
      }
      return 0
    })

  const uniqueTypes = [...new Set(transactions.map((transaction) => transaction.type))]
  const uniqueDates = [...new Set(transactions.map((transaction) => transaction.date))].sort((a, b) =>
    b.localeCompare(a),
  )

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader onSignOut={handleSignOut} />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Transactions</h1>
            <div className="flex gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button>New Transaction</Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>View all transactions in the system</CardDescription>
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="w-full p-2 border rounded"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-sm font-medium mb-1">Filter by Date:</label>
                    <select
                      className="w-full p-2 border rounded"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                    >
                      <option value="">All Dates</option>
                      {uniqueDates.map((date) => (
                        <option key={date} value={date}>
                          {date}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("transactionId")}>
                        <div className="flex items-center">
                          Transaction ID
                          {sortField === "transactionId" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                        </div>
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
                        <div className="flex items-center">
                          Date
                          {sortField === "date" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                        </div>
                      </TableHead>
                      <TableHead>Account</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("amount")}>
                        <div className="flex items-center">
                          Amount
                          {sortField === "amount" && <ArrowUpDown className="ml-2 h-4 w-4" />}
                        </div>
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTransactions.map((transaction) => (
                      <TableRow key={transaction.transactionId}>
                        <TableCell>{transaction.transactionId}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          {transaction.accountId} ({transaction.accountType})
                        </TableCell>
                        <TableCell>{transaction.customerName}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              transaction.type === "Deposit" || transaction.type === "Transfer"
                                ? "default"
                                : transaction.type === "Withdrawal"
                                  ? "destructive"
                                  : "outline"
                            }
                          >
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell className={transaction.type === "Withdrawal" ? "text-red-500" : "text-green-600"}>
                          ${transaction.amount.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
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

