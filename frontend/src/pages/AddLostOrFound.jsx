import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddLostOrFound = () => {
  const [form, setForm] = useState({
    type: "lost",
    title: "",
    description: "",
    dateLostOrFound: "",
    location: "",
    reportedBy: "",
    phone: ""
  });

  const navigate = useNavigate();

  const inputHandler  = (e) => {
    const {name , value} = e.target ;
    setForm({
      ...form ,
      [name]:value
    })
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8000/api/v1/user/report/addLostOrFound", form);
      alert("Report submitted successfully");
      navigate("/user-dashboard");
    }
    catch(err){
      console.log(err);
    }
    
    
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add Lost or Found Item</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Type:
          <select
            name="type"
            value={form.type}
            onChange={inputHandler}
            required
            className="block w-full border rounded p-2 mt-1"
          >
            <option value="">Select type</option>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </label>

        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={inputHandler}
            required
            className="block w-full border rounded p-2 mt-1"
          />
        </label>

        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            value={form.description}
            onChange={inputHandler}
            required
            className="block w-full border rounded p-2 mt-1"
          />
        </label>

        <label className="block mb-2">
          Date Lost or Found:
          <input
            type="date"
            name="dateLostOrFound"
            value={form.dateLostOrFound}
            onChange={inputHandler}
            required
            className="block w-full border rounded p-2 mt-1"
          />
        </label>

        <label className="block mb-2">
          Location:
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={inputHandler}
            required
            className="block w-full border rounded p-2 mt-1"
          />
        </label>

        <label className="block mb-2">
          Reported By:
          <input
            type="text"
            name="reportedBy"
            value={form.reportedBy}
            onChange={inputHandler}
            required
            className="block w-full border rounded p-2 mt-1"
          />
        </label>

        <label className="block mb-4">
          Phone:
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={inputHandler}
            required
            className="block w-full border rounded p-2 mt-1"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddLostOrFound;
