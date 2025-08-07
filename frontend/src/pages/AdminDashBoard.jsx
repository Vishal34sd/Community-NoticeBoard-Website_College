import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col py-6 px-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <button onClick={() => setActiveSection('home')} className="text-left mb-4 hover:text-yellow-400">🏠 Home</button>
        <Link to="/allNotice" className="text-left mb-4 hover:text-yellow-400">📜 All Notices</Link>
         <Link to="/addNotice" className="text-left mb-4 hover:text-yellow-400">📜 Add Notices</Link>
        <Link to="/allComplaint" className="text-left mb-4 hover:text-yellow-400">📜 All Complaints</Link>
        <button onClick={() => setActiveSection('lostFound')} className="text-left mb-4 hover:text-yellow-400">🔍 Lost & Found</button>
        <button onClick={() => setActiveSection('contact')} className="text-left mb-4 hover:text-yellow-400">📞 Contact Info</button>

        {/* Logout Button */}
        <button className="mt-auto bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-left">
          🚪 Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Community NoticeBoard - Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Admin Name</span>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Main Area */}
        <main className="p-6 bg-gray-50 min-h-[calc(100vh-80px)]">
          <p className="text-lg font-medium">Welcome, Admin! Use the sidebar to manage the noticeboard.</p>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
