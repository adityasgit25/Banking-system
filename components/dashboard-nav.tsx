import type React from "react"
import Link from "next/link"
import { Building, Building2, Users, UserCircle, CreditCard, ReceiptText } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    title: "Banks",
    href: "/dashboard/banks",
    icon: <Building className="mr-2 h-4 w-4" />,
  },
  {
    title: "Branches",
    href: "/dashboard/branches",
    icon: <Building2 className="mr-2 h-4 w-4" />,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    title: "Employees",
    href: "/dashboard/employees",
    icon: <UserCircle className="mr-2 h-4 w-4" />,
  },
  {
    title: "Accounts",
    href: "/dashboard/accounts",
    icon: <CreditCard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: <ReceiptText className="mr-2 h-4 w-4" />,
  },
]

export function DashboardNav() {
  return (
    <nav className="hidden md:block w-[240px] p-4 border-r min-h-screen">
      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start")}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

