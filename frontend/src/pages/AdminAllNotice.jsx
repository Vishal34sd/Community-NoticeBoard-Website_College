import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/token';
import { Link } from 'react-router-dom';

const AdminAllNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/user/getNotice", {
        //   headers: {
        //     Authorization: `Bearer ${getToken()}`,
        //   },
        });
        setNotices(res.data.data || []);
      } catch (err) {
        console.error("Failed to fetch notices:", err);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="flex min-h-screen bg-blue-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-blue-200 p-6 space-y-6 shadow-md">
        <Link to="/admin-dashboard" className="block text-xl font-bold text-blue-700 hover:text-blue-900">
          Home
        </Link>
        <Link to="/admin-add-notice" className="block text-md font-semibold hover:text-blue-600">
          Add New Notice
        </Link>
        <Link to="/admin-all-notices" className="block text-md font-semibold text-blue-600 underline">
          See All Notices
        </Link>
        <Link to="/admin-contact" className="block text-md font-semibold hover:text-blue-600">
          Contact Details
        </Link>
        <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition">
          Log Out
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">All Notices</h1>
          <p className="text-md text-gray-600">Manage and view all posted notices</p>
        </header>

        {/* Notices List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <div
              key={notice._id}
              className="bg-white rounded-lg border border-blue-100 shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{notice.title}</h2>
              <p className="text-gray-700 mb-2">{notice.content}</p>
              
            </div>
          ))}
        </div>

        {notices.length === 0 && (
          <div className="text-center text-gray-600 mt-10">No notices available.</div>
        )}
      </main>
    </div>
  );
};

export default AdminAllNotice;
