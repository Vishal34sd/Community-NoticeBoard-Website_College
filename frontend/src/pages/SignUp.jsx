import React from 'react';
import { Link } from 'react-router-dom';
import {useState , useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const SignUp = () => {
  const [username, setUsername ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const navigate = useNavigate();

  const FormSubmitHandler = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8000/api/v1/auth/register", {username , email , password});
      alert("User registered successfully");
      navigate("/user-login");

    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-xl border border-blue-100">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">User Sign-Up</h2>

        <form  onSubmit ={FormSubmitHandler} className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label htmlFor="fullname" className="block text-md font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              value = {username}
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full px-5 py-3 bg-blue-50 text-gray-800 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              value = {email}
              type="email"
              id="email"
              placeholder="Enter your Emial-ID"
              onChange = {(e)=>setEmail(e.target.value)}
              className="w-full px-5 py-3 bg-blue-50 text-gray-800 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              value = {password}
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange = {(e)=>setPassword(e.target.value)}
              className="w-full px-5 py-3 bg-blue-50 text-gray-800 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Signup Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded shadow transition duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link
            to="/user-login"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
