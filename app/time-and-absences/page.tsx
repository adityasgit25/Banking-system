// app/time-and-absences/page.tsx
"use client";

import { Clock, FileText, Calendar, PlusCircle, BarChart, CheckSquare, ArrowLeft,
  Star,
  MessageSquare,
  HomeIcon,
  BellDotIcon,
  Bell,
 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function TimeAndAbsences() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100">
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
      {/* Header Section */}
      <div className="bg-orange-500 p-6 text-white">
        <div className="flex items-center space-x-2">
          <ArrowLeft
            className="w-6 h-6 text-white cursor-pointer"
            onClick={() => router.push('/live')} // Navigates to the /live page
          />
          <div className="text-lg font-semibold">Time and Absences</div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/aditya.png" // Replace with the actual path to the profile picture
              alt="Profile Picture"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h1 className="mt-2 text-xl font-bold">Aditya Maheshwari</h1>
        </div>
      </div>

      {/* Grid Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
        {/* Card 1: Current Time Card */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 text-black">
          <Clock className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold ">Current Time Card</h2>
            <p className="text-gray-600">Open your current time card</p>
          </div>
        </div>

        {/* Card 2: Existing Time Cards */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <FileText className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Existing Time Cards</h2>
            <p className="text-gray-600">Access all of your time cards</p>
          </div>
        </div>

        {/* Card 3: Team Schedule */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <Calendar className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Team Schedule</h2>
            <p className="text-gray-600">View your team shifts and absences</p>
          </div>
        </div>

        {/* Card 4: Add Absence */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <PlusCircle className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Add Absence</h2>
            <p className="text-gray-600">Request an absence and submit for approval</p>
          </div>
        </div>

        {/* Card 5: Absence Balance */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <BarChart className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Absence Balance</h2>
            <p className="text-gray-600">Review current plan balances and absences taken or requested</p>
          </div>
        </div>

        {/* Card 6: Existing Absences */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <CheckSquare className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Existing Absences</h2>
            <p className="text-gray-600">View, change or withdraw existing absence requests</p>
          </div>
        </div>
      </div>
    </div>
  );
}