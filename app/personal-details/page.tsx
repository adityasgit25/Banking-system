"use client";
import {
    ArrowLeft,
    ChevronUp,
    Link,
    Pencil,
    Star,
    MessageSquare,
    HomeIcon,
    BellDotIcon,
    Bell,
  } from "lucide-react";
  
  export default function PersonalDetailsPage() {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
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
        {/* Top Orange Banner */}
        <div className="bg-orange-600 flex items-center px-6 py-4 relative">
        {/* Back Arrow */}
        <button
            onClick={() => window.location.href = "/live"}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-white/80 z-10"
        >
            <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Profile Image */}
        <div className="ml-10 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <img
            src="/aditya.png"
            alt="profile"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Title and Name */}
        <div className="ml-4">
            <h1 className="text-white text-xl font-semibold">Personal Details</h1>
            <p className="text-white text-sm">Aditya Maheshwari</p>
        </div>
        </div>
  
        {/* Content Section */}
        <div className="p-6 space-y-8">
          {/* NAME SECTION */}
          <div className="bg-white shadow rounded-lg">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-orange-600 font-semibold text-lg">Name</h2>
              <ChevronUp className="text-gray-500 w-5 h-5" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="text-gray-900">6/19/23</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">First Name</p>
                <div className="flex items-center">
                  <p className="text-gray-900">Aditya</p>
                  <Pencil className="w-4 h-4 ml-2 text-gray-500 cursor-pointer" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Title</p>
                <p className="text-gray-900">Mr.</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Name</p>
                <div className="flex items-center">
                  <p className="text-gray-900">Maheshwari</p>
                  <Pencil className="w-4 h-4 ml-2 text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
  
          {/* DEMOGRAPHIC INFO SECTION */}
          <div className="bg-white shadow rounded-lg">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-orange-600 font-semibold text-lg">Demographic Info</h2>
              <ChevronUp className="text-gray-500 w-5 h-5" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div>
                <p className="text-sm text-gray-500">Country</p>
                <p className="text-gray-900">India</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="text-gray-900">6/19/23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  