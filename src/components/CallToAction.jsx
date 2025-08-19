import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section
      id="cta"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6 py-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Main content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-5xl font-extrabold animate-fadeInScale">
          View My Projects <br /> See Experience
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Ready to contribute to your next big project. I bring hands-on experience,
          production-ready skills, and a passion for building great software.
        </p>
        <p className="text-indigo-400 text-lg md:text-xl font-medium animate-fadeInScale">
           Open to: Full-time roles, internships, and exciting projects
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <Button className="hero-button bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg px-8 py-3 text-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
            View Projects <ArrowRight size={20} />
          </Button>

          <Button className="hero-button bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
            See Experience<ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
