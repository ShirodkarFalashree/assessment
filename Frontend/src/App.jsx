import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Layout from "./Layout";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Welcome/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        </Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
