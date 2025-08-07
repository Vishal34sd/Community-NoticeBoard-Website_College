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
    <div className="min-h-screen bg-white text-black p-8">
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">All Complaints</h1>
        <p className="text-gray-400 mt-2">Review all user complaints submitted through the platform.</p>
      </div>

      {/* Complaints Table */}
      <div className="overflow-x-auto rounded-lg shadow-md bg-gray-100">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-800 text-white text-left">
            <tr>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Date Reported</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.length > 0 ? (
              complaints.map((complaint) => (
                <tr key={complaint._id} className="border-b border-gray-100 hover:bg-gray-700 transition">
                  <td className="px-4 py-3">{complaint.username}</td>
                  <td className="px-4 py-3">{complaint.title}</td>
                  <td className="px-4 py-3">{complaint.description}</td>
                  <td className="px-4 py-3">{new Date(complaint.dateReported).toLocaleDateString()}</td>
                  <td className="px-4 py-3">{complaint.status || 'Pending'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-400 py-6">
                  No complaints found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllComplaint;
