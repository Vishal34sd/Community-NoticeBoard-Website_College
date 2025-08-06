import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'allNotices':
        return <p>All Notices will be displayed here.</p>;
      case 'addNotice':
        return <p>Form to add new notice will appear here.</p>;
      case 'complaints':
        return <p>User complaints list here.</p>;
      case 'lostFound':
        return <p>Lost and found items here.</p>;
      case 'contact':
        return <p>Contact info / messages here.</p>;
      case 'home':
      default:
        return <p>Welcome, Admin! Use the sidebar to manage the noticeboard.</p>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col py-6 px-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <button onClick={() => setActiveSection('home')} className="text-left mb-4 hover:text-yellow-400">🏠 Home</button>
        <button onClick={() => setActiveSection('allNotices')} className="text-left mb-4 hover:text-yellow-400">📜 All Notices</button>
        <button onClick={() => setActiveSection('addNotice')} className="text-left mb-4 hover:text-yellow-400">➕ Add Notice</button>
        <button onClick={() => setActiveSection('complaints')} className="text-left mb-4 hover:text-yellow-400">🛠️ User Complaints</button>
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

        {/* Content */}
        <main className="p-6 bg-gray-50 min-h-[calc(100vh-80px)]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
