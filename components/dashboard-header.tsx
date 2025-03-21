"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { DashboardNav } from "./dashboard-nav"

interface DashboardHeaderProps {
  onSignOut: () => void
}

export function DashboardHeader({ onSignOut }: DashboardHeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 py-4">
                <DashboardNav />
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/dashboard" className="font-bold text-xl">
            Banking System
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  )
}

