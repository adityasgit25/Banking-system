import Link from 'next/link';
import VideoCallPanel from '@/components/video-call-panel';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

export default function PersonalInfoPage() {
  const greeting = getGreeting();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 pr-64">
        <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-semibold mr-4 hover:underline cursor-pointer">Me</span>
            </Link>
            <span className="text-xl font-semibold">My Team | My Client Groups | Sales | Contract Management | Receivables</span>
          </div>
        </header>
        <main className="p-6">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">{`${greeting}, KAVYASHREE CHANDRANNA`}</h1>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Personal Details</h2>
            <div className="mt-4">
              <p><strong>Name</strong></p>
              <p>Start Date: 6/19/23</p>
              <p>Title: Ms.</p>
              <p>First Name: Kavyashree</p>
              <p>Last Name: Chandranna</p>
            </div>
            <div className="mt-4">
              <p><strong>Demographic Info</strong></p>
              <p>Country: India</p>
              <p>Start Date: 6/19/23</p>
            </div>
            <Link href="/">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Back to Home
              </button>
            </Link>
          </div>
        </main>
      </div>
      <VideoCallPanel />
    </div>
  );
}