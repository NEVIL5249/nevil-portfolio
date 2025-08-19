import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-20" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" style={{animationDelay: '2s'}} />
      <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" style={{animationDelay: '4s'}} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        {/* Greeting with typing animation effect */}

{/* 
        <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-2xl">
            Nevil Gadhia
          </span>
        </h1> */}


{/* 
      <h1 className=" hero-title text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold mt-6 leading-tight animate-fadeInScale">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
          Nevil Gadhia
        </span>
      </h1> */}


        {/* <p className="mt-6 text-xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Full-Stack Developer & Mobile App Enthusiast
          <br />
          <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-gray-400">
            Building modern digital experiences that matter.
          </span>
        </p>  */}


        <h1 className="hero-title font-extrabold text-center animate-fadeInScale">
  Hi, I'm{" "}
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
    Nevil Gadhia
  </span>
</h1>

<p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
  Full-Stack Developer & Mobile App Enthusiast
  <br />
  <span className="text-lg text-gray-400">
    Building modern digital experiences that matter.
  </span>
</p>


        {/* CTA Buttons with hover effects */}

     {/* <div className="mt-10 flex flex-wrap justify-center gap-6">

          <Button 
            variant="outline" 
            className="px-8 py-3 text-lg border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Button>
          <Button 
            className="px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Download Resume
          </Button>
        </div>  */}



<div className="mt-10 flex flex-wrap justify-center gap-6">

  <Button 
    variant="outline" 
    className="hero-button border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
  >
    View Projects
  </Button>

  <Button 
    className="hero-button bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
  >
    Download Resume
  </Button>

</div>



        {/* Social Links with enhanced hover effects */}
        <div className="mt-12 flex justify-center gap-8">
          <a 
            href="mailto:nevilg8690@gmail.com" 
            className="group p-3 rounded-full border border-gray-600 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25"
          >
            <Mail size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a 
            href="tel:+917878805151" 
            className="group p-3 rounded-full border border-gray-600 hover:border-green-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-400/25"
          >
            <Phone size={24} className="text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/nevilgadhia/"
            target="_blank"
            rel="noreferrer"
            className="group p-3 rounded-full border border-gray-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Linkedin size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/NEVIL5249"
            target="_blank"
            rel="noreferrer"
            className="group p-3 rounded-full border border-gray-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-400/25"
          >
            <Github size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;