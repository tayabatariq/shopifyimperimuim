import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Saiyan from "../components/Saiyan";


const RouterComponent = () => {
  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/saiyan" element={<Saiyan />} />

        </Routes>
      </div>
  );
};

export default RouterComponent;
