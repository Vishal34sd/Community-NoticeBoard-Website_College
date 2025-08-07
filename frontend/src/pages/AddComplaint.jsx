import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddComplaint = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8000/api/v1/user/complaint/addComplaint", {title , description , category});
      alert("Complaint sent successfully");
      navigate("/user-dashboard");
    }
    catch(err){
      console.log(err)
    }
   
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Community NoticeBoard - Submit Complaint</h1>
        
      </header>

      {/* Form Content */}
      <main className="flex-1 flex justify-center items-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Submit a Complaint</h2>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="title">
              Complaint Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter complaint title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            >
              <option value="" disabled>Select category</option>
              <option value="Garbage">Garbage</option>
              <option value="Water">Water</option>
              <option value="Electricity">Electricity</option>
              <option value="Roads">Roads</option>
              <option value="Noise">Noise</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="6"
              placeholder="Describe the issue in detail"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded"
          >
            Submit Complaint
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddComplaint;
