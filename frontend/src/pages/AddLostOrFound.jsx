import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllComplaint = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/admin/fetchComplaint');
        setComplaints(response.data.complaints || []);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Community NoticeBoard - All Complaints</h1>
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">Admin</span>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Complaints List */}
      <main className="flex-1 px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Complaints Received</h2>

        {complaints.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints.map((complaint) => (
              <div key={complaint._id} className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{complaint.title}</h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Description:</span> {complaint.description}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">User:</span> {complaint.username}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Date Reported:</span> {new Date(complaint.dateReported).toLocaleDateString()}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Status:</span>{' '}
                  <span className="text-yellow-500 font-medium">{complaint.status || 'Pending'}</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg text-center">No complaints found.</p>
        )}
      </main>
    </div>
  );
};

export default AllComplaint;
