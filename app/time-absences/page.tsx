import { useState } from 'react';
import Link from 'next/link';
import VideoCallPanel from '@/components/video-call-panel';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

export default function TimeAbsencesPage() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const greeting = getGreeting();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 pr-64">
        <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-semibold mr-4 hover:underline cursor-pointer">Me</span>
            </Link>
            <span className="text-xl font-semibold">Time and Absences</span>
          </div>
        </header>
        <main className="p-6">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">{`${greeting}, KAVYASHREE CHANDRANNA`}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-lg shadow transition-all duration-300 ${
                isHovered1 ? 'bg-transparent' : 'bg-white'
              }`}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <div className="flex items-center">
                <span className="text-blue-500 text-2xl mr-2">📄</span>
                <h2 className="text-lg font-semibold">Current Time Card</h2>
              </div>
              <p className="mt-2">Open your current time card</p>
            </div>
            <div
              className={`p-4 rounded-lg shadow transition-all duration-300 ${
                isHovered2 ? 'bg-transparent' : 'bg-white'
              }`}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <div className="flex items-center">
                <span className="text-blue-500 text-2xl mr-2">📄</span>
                <h2 className="text-lg font-semibold">Existing Time Cards</h2>
              </div>
              <p className="mt-2">Access all of your time cards</p>
            </div>
          </div>
          <Link href="/">
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Back to Home
            </button>
          </Link>
        </main>
      </div>
      <VideoCallPanel />
    </div>
  );
}