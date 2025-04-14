import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    role: "",
  });
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = async (e) => {
  const file = e.target.files[0];
  setProfilePic(file);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default"); // <-- make sure it's unsigned & whitelisted

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dghoya7tk/image/upload", formData);
    setProfilePicUrl(res.data.secure_url);
  } catch (err) {
    console.error("Cloudinary Upload Error", err);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      let profilePicUrl = "";

      // 1. Upload image to Cloudinary
      if (profilePic) {
        const formData = new FormData();
        formData.append("file", profilePic);
        formData.append("upload_preset", "ml_default"); // set your preset here
        formData.append("cloud_name", "dghoya7tk"); // set your cloud name here

        const cloudinaryRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dghoya7tk/image/upload",
          formData
        );

        profilePicUrl = cloudinaryRes.data.secure_url;
      }

      // 2. Send registration request
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        ...inputs,
        profilePic: profilePicUrl,
      });

      setSuccess("Registered successfully!");
      setInputs({
        email: "",
        username: "",
        password: "",
        role: "",
      });
      setProfilePic(null);

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[82vh] flex items-center justify-center bg-transparent px-4 py-10">
      <div className="bg-[#f7f2ff] shadow-lg rounded-2xl px-8 py-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#7806c0] flex items-center justify-center overflow-hidden bg-white">
            {profilePic ? (
              <img
                src={URL.createObjectURL(profilePic)}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[#7806c0] text-sm">Profile Pic</span>
            )}
          </div>
          <label
            htmlFor="profilePic"
            className="mt-2 text-sm text-[#7806c0] font-semibold cursor-pointer hover:underline"
          >
            Upload
            <input
              id="profilePic"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:border-[#7806c0]"
            required
            value={inputs.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:border-[#7806c0]"
            required
            value={inputs.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:border-[#7806c0]"
            required
            value={inputs.password}
            onChange={handleChange}
          />
          <select
            id="role"
            name="role"
            value={inputs.role}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-300 focus:outline-none focus:border-[#7806c0] text-gray-700 appearance-none"
          >
            <option value="" disabled>
              Please select a role
            </option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            disabled={isLoading}
            className={`bg-[#6c00af] hover:bg-[#7806c0] text-white font-semibold py-2 rounded-lg transition duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
            Already have an account? <Link to="/login" className="hover:text-purple-500">Login</Link>
          </p>
      </div>
    </div>
  );
};

export default Register;
