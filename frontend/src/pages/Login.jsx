import React from 'react';
import { Link } from 'react-router-dom';
import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { decodeToken, getToken , storeToken} from '../utils/token';

const UserLogin = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();

  const formSubmitHandler=async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8000/api/v1/auth/login",{email , password});
      alert("Login successfully");
      storeToken(res.data.token);
      const tokenData = decodeToken(getToken());
      if(tokenData.role!=="admin"){
        navigate("/user-dashboard");
      }
      else{
        navigate("/admin-dashboard");
      }
      
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-xl border border-blue-100">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">User Login</h2>

        <form onSubmit={formSubmitHandler} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              value ={email}
              type="email"
              id="email"
              placeholder="Enter your registered Email-ID"
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

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded shadow transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-center text-gray-600">
          New user?{' '}
          <Link
            to="/user-signup"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
