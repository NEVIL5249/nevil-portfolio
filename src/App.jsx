import React from "react";

import Hero from "./components/Hero";
import FloatingNav from "./components/FloatingNav";
import Features from "./components/Features";
import TechArsenal from "./components/TechArsenal";
import CallToAction from "./components/CallToAction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExperiencePage from "./components/ExperiencePage";

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

// ---------- NAVBAR ----------
// function Navbar() {
//   const sections = ["Home", "Projects", "Skills", "About", "Contact"];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 border-b border-white/10 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
//         {/* Logo */}
//         <div className="flex items-center gap-2 font-bold text-white">
//           <span className="bg-white text-black px-2 py-1 rounded">NG</span>
//           <span>Nevil Gadhia</span>
//         </div>

//         {/* Nav Links */}
//         <div className="hidden md:flex gap-8">
//           {sections.map((s) => (
//             <a
//               key={s}
//               href={`#${s.toLowerCase()}`}
//               className="text-gray-400 hover:text-white transition"
//             >
//               {s}
//             </a>
//           ))}
//         </div>

//         {/* Right Icons */}
//         <div className="flex gap-4">
//           <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
//             <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
//           </a>
//           <a href={PROFILE.github} target="_blank" rel="noreferrer">
//             <Github className="w-5 h-5 text-gray-400 hover:text-white" />
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // ---------- HERO ----------
// function Hero() {
//   return (
// <section
//   id="home"
//   className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center"
// >
//   {/* Background grid */}
//   <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px]" />

//   {/* Content */}
//   <div className="relative z-10 max-w-3xl px-6">
//     <div className="mx-auto w-40 h-40 rounded-full border-4 border-gray-600 flex items-center justify-center text-lg font-bold">
//       Nevil
//     </div>

//     <h1 className="text-4xl md:text-6xl font-extrabold mt-6">
//       Hi, I’m <span className="text-blue-400">Nevil Gadhia</span>
//     </h1>

//     <p className="mt-4 text-lg md:text-xl text-gray-300">
//       Full-Stack Developer & Mobile App Enthusiast. Building modern digital
//       experiences that matter.
//     </p>

//     <div className="mt-8 flex flex-wrap justify-center gap-4">
//       <Button variant="outline">View Projects</Button>
//       <Button>Download Resume</Button>
//     </div>

//     <div className="mt-8 flex justify-center gap-6 text-gray-400 text-2xl">
//       <a href="mailto:nevilg8690@gmail.com" className="hover:text-white">
//         <Mail size={22} />
//       </a>
//       <a href="tel:+917878805151" className="hover:text-white">
//         <Phone size={22} />
//       </a>
//       <a
//         href="https://www.linkedin.com/in/nevilgadhia/"
//         target="_blank"
//         rel="noreferrer"
//         className="hover:text-white"
//       >
//         <Linkedin size={22} />
//       </a>
//       <a
//         href="https://github.com/NEVIL5249"
//         target="_blank"
//         rel="noreferrer"
//         className="hover:text-white"
//       >
//         <Github size={22} />
//       </a>
//     </div>
//   </div>
// </section>

//   );
// }

// ---------- MAIN ----------
export default function App() {
  return (
<Router>
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
      </Routes>
    </Router>
  );
}
