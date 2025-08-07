import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"

const AddNotice = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const res = await axios.post("http://localhost:8000/api/v1/admin/addNotice",{title, content});
        alert("Notice posted successfully");
        navigate("/admin-dashboard");
    }
    catch(err){
        console.log(err);
    } 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Community NoticeBoard - Add Notice</h1>
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">Vishal Dubey</span>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Form Content */}
      <main className="flex-1 flex justify-center items-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Notice</h2>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter notice title"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="6"
              placeholder="Enter notice description"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded"
          >
            Post Notice
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddNotice;
