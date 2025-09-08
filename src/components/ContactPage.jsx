import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6 py-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col gap-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold animate-fadeInScale">
          Contact Me
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Have a project in mind? Let’s connect!
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-white transition"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Your Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-white transition"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-white transition"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-4">
            <Button className="hero-button bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg px-8 py-3 text-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
              Send Message <ArrowRight size={20} />
            </Button>
          </div>
        </form>

        {/* Extra Info */}
        <div className="mt-12 text-center text-gray-400">
          <p>Email: nevilg8690@gmail.com</p>
          <p>Location: Rajkot, India.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
