import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen transition-all duration-300">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-3 py-5 bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-yellow-400">NoticeNest</h1>
        <div className="space-x-5">
          <a
            href="#features"
            className="hover:text-yellow-300 font-medium relative group"
          >
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
          </a>
          
         <Link to="/user-login"><button className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-4 py-2 rounded transition-transform duration-200 transform hover:scale-105">
            Login
          </button></Link>
          <Link to="/sign-up">
            <button className="bg-green-200 hover:bg-green-300 text-green-900 px-4 py-2 rounded transition-transform duration-200 transform hover:scale-105">
              Signup
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-blue-50">
        <h2 className="text-5xl font-bold mb-4 text-blue-800">Community NoticeBoard Website</h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          A centralized platform where society admins post crucial updates and members stay informed — all in one convenient place.
        </p>
        <a href="#features">
          <button className="mt-4 bg-blue-300 hover:bg-blue-400 text-black px-6 py-3 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300">
            Explore Features
          </button>
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center text-blue-800 mb-12">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Admin-Controlled Notices",
              desc: "Only society admins have access to post announcements and alerts for the community.",
            },
            {
              title: "Member View Access",
              desc: "Residents and members can view all notices shared by admins, but cannot post themselves.",
            },
            {
              title: "Live Updates",
              desc: "Members receive instant updates when a new notice is published by the admin.",
            },
            {
              title: "Role-Based Access",
              desc: "Admins have full access to manage notices, while members have read-only access.",
            },
            {
              title: "Secure Authentication",
              desc: "Both admins and members login securely through protected authentication methods.",
            },
            {
              title: "Responsive Design",
              desc: "Works perfectly across all devices—mobile, tablet, and desktop.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-400 transition duration-300"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h4>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-50 py-6 text-center text-gray-500 border-t border-blue-100 mt-20">
        © 2025 NoticeNest. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
