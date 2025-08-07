import React, { useState } from 'react';

const ContactPage = () => {
  const adminContact = {
    name: 'Vishal Dubey',
    phone: '+91 9876543210',
    email: 'admin@communityboard.com',
    address: 'Room No. 101, Admin Block, XYZ College Campus, City, India'
  };

  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    
    console.log('Feedback submitted:', feedback);

    setFeedback('');
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000); // Reset message after 3s
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Community NoticeBoard - Contact Admin</h1>
        
      </header>

      {/* Contact Info & Feedback */}
      <main className="flex-1 flex justify-center items-center px-4 py-10">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Admin Contact Information</h2>

          <div className="mb-4">
            <p className="text-gray-700 font-medium">Name:</p>
            <p className="text-gray-900">{adminContact.name}</p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 font-medium">Phone:</p>
            <p className="text-gray-900">{adminContact.phone}</p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 font-medium">Email:</p>
            <p className="text-gray-900">{adminContact.email}</p>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 font-medium">Address:</p>
            <p className="text-gray-900">{adminContact.address}</p>
          </div>

          {/* Feedback Section */}
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Want to send feedback? Send here:</h3>

          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Write your feedback here..."
              required
            ></textarea>

            <button
              type="submit"
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded"
            >
              Submit Feedback
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-green-600 font-medium">Thank you for your feedback!</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
