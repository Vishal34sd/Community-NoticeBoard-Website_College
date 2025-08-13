import React from 'react';
import {useState , useEffect} from "react";
import axios from "axios";

const AllComplaintsAdminPage = () => {

  const [complaint , setComplaint] = useState([]);

  useEffect(()=>{
    getAllComplaint();
  },[]);

  const getAllComplaint = async()=>{
    try{
      const res = await axios.get("http://localhost:8000/api/v1/admin/fetchComplaint");
      setComplaint(res.data.data);
      console.log(res.data.data);
    }
    catch(err){
      console.log(err);
    }
  }
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

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Submitted Complaints</h2>

        {/* Sample complaint cards */}
        <div className="space-y-4">
          
          {complaint.map((item, index)=>{
            return(
              <div className="p-4 bg-white shadow-sm rounded-md border">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.category}</p>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <div className="text-sm text-gray-500 mt-2">Submitted By-{item.submittedBy}</div>
          </div>
            )
            
          })}
        </div>

        
      </main>
    </div>
  );
};

export default AllComplaintsAdminPage;
