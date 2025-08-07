import React from 'react';
import {useState , useEffect} from "react";
import axios from "axios"
import { Link } from 'react-router-dom';
import { getToken } from '../utils/token';

const UserDashboard = () => {
  const [notice , setNotice] = useState([]);

  useEffect(()=>{
    getAllNotices();
  }, []);

  const getAllNotices = async()=>{
    try{
      const res = await axios.get("http://localhost:8000/api/v1/user/getNotice",{
        headers: {
          Authorization : `Bearer ${getToken()}`
        }
      });
      const fetchedData = res.data.data
      setNotice(fetchedData);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-center">Dashboard</h2>

        <div className="mt-6 space-y-3">
          <button className="bg-blue-800 hover:bg-blue-700 py-2 px-4 rounded transition w-full text-left">
            Home
          </button>
          <Link to="/addComplaint" className="block"><button className="bg-blue-800 hover:bg-blue-700 py-2 px-4 rounded transition w-full text-left">
            Add Complaint
          </button></Link>
          <Link to="/report" className="block"><button className="bg-blue-800 hover:bg-blue-700 py-2 px-4 rounded transition w-full text-left">
            Report Lost & Found
          </button></Link>
          <Link to="/contact" className="block"><button className="bg-blue-800 hover:bg-blue-700 py-2 px-4 rounded transition w-full text-left">
            Contact Details
          </button></Link>
          <Link to="/rules&guidelines" className="block"><button className="bg-blue-800 hover:bg-blue-700 py-2 px-4 rounded transition w-full text-left">
            Rules & Guidelines
          </button></Link>
        </div>

        <button className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded transition mt-auto w-full text-left">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-10 py-5 flex justify-between items-center border-b border-blue-100">
          <h1 className="text-2xl font-semibold text-blue-800">Welcome to the Community Portal </h1>
          <div className="text-blue-800 font-medium text-lg">
            {/* Welcome, <span className="font-bold">{userName}</span> */}
          </div>
        </header>

        {/* Notices */}
        <main className="flex-1 p-10">
          <h2 className="text-xl font-bold text-blue-700 mb-6">All Notices</h2>

          <div className="space-y-6">
            {notice.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow border border-blue-100 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
                <p>{item.date}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
