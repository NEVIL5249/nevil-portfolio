import React from "react";

import Hero from "./components/Hero";
import FloatingNav from "./components/FloatingNav";
import Features from "./components/Features";
import TechArsenal from "./components/TechArsenal";
import CallToAction from "./components/CallToAction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ExperiencePage from "./components/ExperiencePage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage"; 

// ---------- PROFILE ----------
const PROFILE = {
  name: "Nevil Gadhia",
  role: "Full-Stack Developer & Mobile App Enthusiast",
  about: "Building modern digital experiences that matter.",
  email: "nevilg8690@gmail.com",
  phone: "+91 7878805151",
  github: "https://github.com/NEVIL5249",
  linkedin: "https://www.linkedin.com/in/nevilgadhia/",
  resumeUrl: "#",
};

export default function App() {
  return (
<Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="bg-black text-white font-sans">
            <Hero />
            <Features />
            <TechArsenal />
            <CallToAction />
            <FloatingNav />
          </div>
        }/>
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
