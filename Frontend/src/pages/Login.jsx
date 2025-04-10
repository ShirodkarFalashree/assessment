import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-[82vh] bg-transparent flex items-center justify-center px-4 py-12">
      <div className="bg-[#f7f2ff8a] shadow-lg rounded-2xl px-8 py-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#6c00af] mb-6">Welcome Back!</h2>

        <form className="flex flex-col space-y-5">
          <div>
            <label className="block mb-1 text-[#7806c0] font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-[#7806c0] font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
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
            Don't have an account?  <Link to="/register" className="hover:text-purple-500">Contact</Link>
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
