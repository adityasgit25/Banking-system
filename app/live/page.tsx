"use client";

import { useEffect, useState, useRef } from "react";
import { ScrollNavigation } from "@/components/scroll-navigation"
import {
  User,
  Cloud,
  IdCard,
  Mail,
  BarChart,
  CalendarDays,
  FileUser,
  CreditCard,
  Plane,
  Timer,
  Star,
  MessageSquare,
  HomeIcon,
  BellDotIcon,
  Bell,
} from "lucide-react";
import Link from "next/link";

interface NavigationItem {
  id: string
  label: string
  isActive?: boolean
}

export default function Page() {
    const [greeting, setGreeting] = useState("");
    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
          setGreeting("Good Morning");
        } else if (currentHour < 18) {
          setGreeting("Good Afternoon");
        } else {
          setGreeting("Good Evening");
        }
      }, []);
    const [navItems, setNavItems] = useState<NavigationItem[]>([
        { id: "me", label: "Me", isActive: true },
        { id: "my-team", label: "My Team" },
        { id: "my-client-groups", label: "My Client Groups" },
        { id: "sales", label: "Sales" },
        { id: "contract-management", label: "Contract Management" },
        { id: "receivables", label: "Receivables" },
        { id: "reports", label: "Reports" },
        { id: "analytics", label: "Analytics" },
        { id: "settings", label: "Settings" },
      ])
    
      const handleItemClick = (clickedItem: NavigationItem) => {
        setNavItems(
          navItems.map((item) => ({
            ...item,
            isActive: item.id === clickedItem.id,
          })),
        )
      }

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-white h-16 flex items-center shadow-md">
        {/* Hamburger Button */}
        <div className="relative group">
          <button
            className="ml-4 flex flex-col items-center justify-center space-y-2 p-3 rounded-md bg-white hover:bg-gray-200 focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-1 bg-orange-500"></div>
            <div className="w-8 h-1 bg-orange-500"></div>
            <div className="w-8 h-1 bg-orange-500"></div>
          </button>
          {/* Tooltip */}
          <span className="absolute top-12 left-0 bg-white text-black text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Navigator
          </span>
        </div>
        {/* Endava Logo */}
        <img
          src="/endava.png" 
          alt="Endava Logo"
          className="h-16 ml-4"
        />
        {/* Right section with icons */}
        <div className="ml-auto flex items-center space-x-6 mr-4">
          <HomeIcon className="h-6 w-6 text-gray-500" />
          <Star className="h-6 w-6 text-gray-500" />
          <MessageSquare className="h-6 w-6 text-gray-500" />
          <Bell className="h-6 w-6 text-gray-500" />
          <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="/aditya.png"
              alt="User profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

       

      {/* Greeting Section */}
      <div className="w-full bg-gray-100 py-8 px-4 flex justify-center items-center">
        <h1 className="text-5xl text-orange-500 text-center font-normal"
            style={{ fontFamily: "Helvetica Neue" }}
        >
          {greeting}, Aditya Maheshwari
        </h1>
      </div>

      <main className="min-h-screen p-4">
      <div className="max-w-full mx-auto">
        <ScrollNavigation items={navItems} onItemClick={handleItemClick} />
      </div>

      <div className="mt-8 p-4">
        <h1 className="text-2xl font-bold">Content Area</h1>
        <p className="mt-4">The active tab is: {navItems.find((item) => item.isActive)?.label}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Quick Actions */}
          <div>
            <h2 className="text-orange-600 font-semibold mb-4">QUICK ACTIONS</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">👤</span>
                <span className="text-black"><Link href="/personal-details" className="text-black">Personal Details</Link></span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">☁️</span>
                <span className="text-black">Document Records</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📄</span>
                <span className="text-black">Identification Info</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">✉️</span>
                <span className="text-black">Contact Info</span>
              </div>
            </div>
          </div>

          {/* Apps */}
          <div>
            <h2 className="text-orange-600 font-semibold mb-4">APPS</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <span className="text-3xl">📊</span>
                <span className="text-sm text-orange-600 mt-1">Directory</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">📅</span>
                <span className="text-sm text-orange-600 mt-1"><Link href="/time-and-absences" className="text-black">Time and Absences</Link></span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">👤</span>
                <span className="text-sm text-orange-600 mt-1">Personal Information</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">💳</span>
                <span className="text-sm text-orange-600 mt-1">Expenses</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">✈️</span>
                <span className="text-sm text-orange-600 mt-1">Endava Vacation</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">⏱️</span>
                <span className="text-sm text-orange-600 mt-1">My TimeCards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}