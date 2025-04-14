

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: ""
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setInputs((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", inputs,{ withCredentials: true });
//       const { role } = res.data;

      
//       if (role === "student") {
//         navigate("/student-dashboard");
//       } else if (role === "admin") {
//         navigate("/admin-dashboard");
//       } else {
//         setError("Invalid role. Please contact support.");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-[82vh] bg-transparent flex items-center justify-center px-4 py-12">
//       <div className="bg-[#f7f2ff8a] shadow-lg rounded-2xl px-8 py-10 max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-[#6c00af] mb-6">Welcome Back!</h2>

//         {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

//         <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
//           <div>
//             <label className="block mb-1 text-[#7806c0] font-medium">Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter your username"
//               value={inputs.username}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-[#7806c0] font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={inputs.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-[#6c00af] hover:bg-[#7806c0] text-white font-semibold py-2 rounded-lg cursor-pointer transition duration-300"
//           >
//             Login
//           </button>

//           <p className="text-sm text-center text-gray-600">
//             Don't have an account? <Link to="/register" className="hover:text-purple-500">Register</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        inputs,
        { withCredentials: true }
      );
      const { user } = res.data;

      console.log("Login response:", res.data);
      console.log("Cookies:", document.cookie); // Note: HTTP-only cookies won't show here

      // Store user info in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(user));

      if (user.role === "student") {
        navigate("/student-dashboard");
      } else if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        setError("Invalid role. Please contact support.");
      }
    } catch (err) {
      console.error("Login error:", err);
      console.error("Response:", err.response);
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-[82vh] bg-transparent flex items-center justify-center px-4 py-12">
      <div className="bg-[#f7f2ff8a] shadow-lg rounded-2xl px-8 py-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#6c00af] mb-6">Welcome Back!</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-[#7806c0] font-medium">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={inputs.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-[#7806c0] font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#6c00af] hover:bg-[#7806c0] text-white font-semibold py-2 rounded-lg cursor-pointer transition duration-300"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600">
            Don't have an account? <Link to="/register" className="hover:text-purple-500">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;