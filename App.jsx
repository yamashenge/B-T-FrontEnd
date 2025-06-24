import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Apply from "./components/Apply";
import LearnershipForm from "./components/LearnershipForm";
import JobForm from "./components/JobForm";
import InternshipForm from "./components/InternshipForm";  // Import InternshipForm

// Wrapper to conditionally render Navbar
const AppWrapper = () => {
  const location = useLocation();

  // Add /internship-form to hideNavbarRoutes if you want to hide Navbar on that page
  const hideNavbarRoutes = ["/apply", "/learnership-form", "/job-form", "/internship-form"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/learnership-form" element={<LearnershipForm />} />
        <Route path="/job-form" element={<JobForm />} />
        <Route path="/internship-form" element={<InternshipForm />} />  {/* Added route */}
      </Routes>
    </>
  );
};

// Main App
const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
