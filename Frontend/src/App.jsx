import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Layout from "./Layout";
import About from "./pages/About";
import AdminLayout from "./AdminLayout";
import StudentLayout from "./StudentLayout";
import GiveTest from "./pages/GiveTest";
import UploadQuestionBank from "./pages/UploadQuestionBank"; // Ensure this exists
import CreateExam from "./pages/CreateExam"; // Ensure this exists
import Results from "./pages/Results"; // Ensure this exists
import ViewResponses from "./pages/ViewResponses"; // Ensure this exists
import AttemptedTests from "./pages/AttemptedTests"; // Ensure this exists
import Analysis from "./pages/Analysis"; // Ensure this exists

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes under Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Admin routes under AdminLayout */}
        <Route path="/admin-dashboard" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="upload-question-bank" element={<UploadQuestionBank />} />
          <Route path="create-exam" element={<CreateExam />} />
          <Route path="view-responses" element={<ViewResponses />} />
          <Route path="analysis" element={<Analysis />} />

        </Route>

        {/* Student routes under StudentLayout */}
        <Route path="/student-dashboard" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="give-test" element={<GiveTest />} />
          <Route path="results" element={<Results />} />
          <Route path="attempted-tests" element={<AttemptedTests />} />
        </Route>

        {/* Fallback for invalid routes */}
      </Routes>
    </Router>
  );
}

export default App;