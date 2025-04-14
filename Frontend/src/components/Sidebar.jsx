import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaUpload,
  FaBook,
  FaClipboardList,
  FaFileAlt,
  FaChartBar,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  
    // Optionally hit the backend logout route
    fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(() => {
      // Redirect to login page
      navigate("/login");
    }).catch((err) => {
      console.error("Logout failed:", err);
      navigate("/login"); // Redirect anyway
    });
  };
  
  const adminLinks = [
    { path: "/admin-dashboard/upload-question-bank", name: "Upload", icon: <FaUpload /> },
    { path: "/admin-dashboard/create-exam", name: "Create", icon: <FaBook /> },
    { path: "/admin-dashboard/view-responses", name: "Responses", icon: <FaFileAlt /> },
    { path: "/admin-dashboard/analysis", name: "Analysis", icon: <FaChartBar /> },

  ];

  const studentLinks = [
    { path: "/student-dashboard/give-test", name: "Give Test", icon: <FaClipboardList /> },
    { path: "/student-dashboard/attempted-tests", name: "Attempts", icon: <FaFileAlt /> },
    { path: "/student-dashboard/results", name: "Results", icon: <FaChartBar /> },
  ];

  const links = role === "admin" ? adminLinks : studentLinks;

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div
          className={`h-[98vh] bg-[#7203b774] text-lg text-white transition-all duration-300 flex flex-col rounded-2xl m-2 justify-between ${
            collapsed ? "w-16" : "w-64"
          } p-4`}
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              {!collapsed && <h1 className="text-xl font-bold">Dashboard</h1>}
              <button onClick={() => setCollapsed(!collapsed)} className="text-white text-2xl cursor-pointer">
                         {collapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
              </button>
            </div>

            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 p-2 rounded-md transition hover:bg-white/20 ${
                      location.pathname === link.path ? "bg-white/20" : ""
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    {!collapsed && <span>{link.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="mt-6 flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-red-500/10  text-white transition"
          >
            <FaSignOutAlt />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      )}

      {/* Mobile Bottom Navbar */}
      {isMobile && (
        <div className="fixed bottom-0 w-full bg-[#7203b7d6] shadow-md rounded-t-xl px-6 py-2 flex justify-between items-center z-50">
          {links.slice(0, 4).map((link) => (
            <Link
              to={link.path}
              key={link.path}
              className={`flex flex-col items-center text-sm ${
                location.pathname === link.path ? "text-blue-500" : "text-white"
              }`}
            >
              {link.icon}
            </Link>
          ))}

          {/* Floating center button */}
          <Link
            to={role === "admin" ? "/create-exam" : "/give-test"}
            className="relative -top-6 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg "
          >
            <FaPlus size={20} />
          </Link>

          {/* Logout icon on mobile */}
          <button
            onClick={handleLogout}
            className="flex flex-col items-center text-sm text-white"
          >
            <FaSignOutAlt />
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
