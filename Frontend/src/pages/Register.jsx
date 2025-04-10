import React, { useState } from 'react';

const Register = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-[82vh] flex items-center justify-center bg-transparent px-4 py-10">
      <div className="bg-[#f7f2ff] shadow-lg rounded-2xl px-8 py-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#7806c0] flex items-center justify-center overflow-hidden bg-white">
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-[#7806c0] text-sm">Profile Pic</span>
            )}
          </div>
          <label className="mt-2 text-sm text-[#7806c0] font-semibold cursor-pointer hover:underline">
            Upload
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        </div>

        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2  rounded-lg focus:outline-none  "
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2  rounded-lg focus:outline-none  "
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2  rounded-lg focus:outline-none  "
            required
          />

          <select
            className="px-4 py-2  rounded-lg focus:outline-none  text-gray-700"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>

          <button
            type="submit"
            className="bg-[#6c00af] hover:bg-[#7806c0] text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
