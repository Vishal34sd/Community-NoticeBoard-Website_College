import React from 'react';

const CommunityRulePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Community NoticeBoard - Rules & Guidelines</h1>
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">User Name</span>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Rules & Guidelines</h2>
        <p className="text-gray-600 mb-6">Please read and follow these rules to ensure a safe, respectful, and enjoyable environment for all residents.</p>

        <ul className="space-y-4 text-gray-700 list-disc list-inside">
          <li>
            <strong>Respect Others:</strong> Treat all community members with respect and kindness. Bullying, discrimination, or harassment of any kind is not tolerated.
          </li>
          <li>
            <strong>Maintain Cleanliness:</strong> Dispose of waste properly. Keep public areas clean and avoid littering.
          </li>
          <li>
            <strong>Noise Control:</strong> Avoid loud noises, especially during quiet hours (10:00 PM – 7:00 AM).
          </li>
          <li>
            <strong>Parking Etiquette:</strong> Park vehicles in designated areas. Do not block entrances or other cars.
          </li>
          <li>
            <strong>Pet Policy:</strong> Keep pets on a leash in common areas. Clean up after your pets immediately.
          </li>
          <li>
            <strong>Security Awareness:</strong> Do not allow unknown individuals into the premises. Report suspicious activities to the security or admin.
          </li>
          <li>
            <strong>Use of Common Areas:</strong> Treat shared spaces with care. Leave them clean and undamaged after use.
          </li>
          
          <li>
            <strong>Feedback & Suggestions:</strong> You are encouraged to share constructive feedback with the admin for community improvement.
          </li>
          <li>
            <strong>Consequences:</strong> Violating community rules may result in warnings, restricted access, or disciplinary action by the committee.
          </li>
        </ul>

        <div className="mt-8">
          <p className="text-gray-600 italic">
            Let’s work together to keep our society clean, safe, and peaceful for everyone.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CommunityRulePage;
