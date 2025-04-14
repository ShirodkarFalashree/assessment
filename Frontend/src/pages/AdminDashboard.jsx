import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

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

        {/* Placeholder for other dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Manage Exams</h3>
            <p className="mt-2 text-gray-600">Create and manage exams for students.</p>
          </div>
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Question Bank</h3>
            <p className="mt-2 text-gray-600">Upload and organize question banks.</p>
          </div>
          <div className="bg-white/40 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Analytics</h3>
            <p className="mt-2 text-gray-600">View student performance and analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;