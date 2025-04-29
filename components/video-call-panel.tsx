const VideoCallPanel = () => {
    return (
      <div className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-80 text-white p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Meeting</h2>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Leave</button>
        </div>
        <div className="flex flex-col space-y-4">
          {/* Placeholder participant tiles */}
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-gray-700 rounded-lg h-32 flex items-center justify-center">
              <span className="text-gray-400">Participant {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VideoCallPanel;