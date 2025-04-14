import React, { useEffect, useState } from "react";

const StudentDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user info from sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="h-screen w-full bg-transparent p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Dashboard</h1>

        {user ? (
          <div className="bg-white/40 shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold ">Welcome, {user.username}!</h2>
            <div className="mt-4 space-y-2">
              <p>
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">Role:</span> {user.role}
              </p>
              {user.profilePic && (
                <div className="mt-4">
                  <span className="font-medium">Profile Picture:</span>
                  <img
                    src={user.profilePic}
                    alt="Profile"
                    className="mt-2 h-24 w-24 rounded-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-red-500">No user information available. Please log in again.</p>
        )}

        {/* Placeholder for student dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Give Test</h3>
            <p className="mt-2 text-gray-600">Start a new test assigned to you.</p>
          </div>
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">View Results</h3>
            <p className="mt-2 text-gray-600">Check your test scores and performance.</p>
          </div>
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Review Responses</h3>
            <p className="mt-2 text-gray-600">See your submitted answers and feedback.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;