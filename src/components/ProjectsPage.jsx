import React, { useState } from "react";

const projects = [
  {
    title: "CereboAI",
    subtitle: "AI Model Comparison Platform",
    description:
      "Modern web app to test and compare responses from multiple AI models. Supports free APIs with side-by-side output comparison. Built with Supabase for authentication and secure chat history storage.",
    tech: ["TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: "/images/cerebo.png",
  },
  {
    title: "workMU",
    subtitle: "Job Portal Application",
    description:
      "Full-stack MERN job portal connecting job seekers with employers. Features authentication, job posting, and application tracking. Provides secure dashboards for candidates and recruiters.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: "/images/workmu.png",
  },
  {
    title: "DevSpace",
    subtitle: "Online Code Editor",
    description:
      "Web-based code editor with real-time compilation using Judge0 API. Includes authentication, syntax highlighting, and saved snippets. Designed for quick prototyping and testing.",
    tech: ["React", "Node.js", "Express", "Judge0 API"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: "/images/DevSpace.png",
  },
  {
    title: "SecuraEntry",
    subtitle: "Smart Visitor Log App",
    description:
      "Mobile-first visitor log app for apartments and offices. Enables secure entry via authentication, QR codes, and real-time tracking. Built with FlutterFlow, later extended in Dart.",
    tech: ["Flutter", "Firebase", "Firestore", "QR Code"],
    category: "Mobile Development",
    link: "https://github.com/NEVIL5249",
    image: "/images/secura.png",
  },
  {
    title: "BrightSprings",
    subtitle: "ASD Assistance App",
    description:
      "Supportive app for children with Autism Spectrum Disorder. Provides structured routines, interactive tools, and caregiver dashboards. Features AI-driven mood detection.",
    tech: ["Flutter", "Node.js", "Firebase", "AI Tools"],
    category: "Mobile Development",
    link: "https://github.com/NEVIL5249",
    image: "/images/brightsprings.png",
  },
  {
    title: "NL2SQL-Pro",
    subtitle: "Natural Language to SQL Converter",
    description:
      "Full-stack app converting natural language queries into SQL. Uses Ollama with locally run LLaMA 3. Supports multiple SQL dialects with privacy-focused execution.",
    tech: ["React", "Node.js", "Ollama", "LLaMA 3", "SQL"],
    category: "AI/ML",
    link: "https://github.com/NEVIL5249",
    image: "/images/nl2sqlpro.png",
  },
  {
    title: "FileDrop",
    subtitle: "File Sharing Micro-SaaS",
    description:
      "Modern Micro-SaaS for secure file sharing. Upload files, generate links, and manage access. Built with Supabase authentication and storage integration.",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS"],
    category: "Web Development",
    link: "https://github.com/NEVIL5249",
    image: "/images/FileDrop.png",
  },
   {
    "title": "socketio-realtime-chat",
    "subtitle": "Real-time Chat Application",
    "description":
      "A real-time chat app built with Node.js, Express, and Socket.IO. Supports multi-user messaging over WebSocket with a clean and simple frontend interface. Ideal for learning real-time communication concepts.",
    "tech": ["Node.js", "Express.js", "Socket.IO", "HTML", "CSS", "JavaScript"],
    "category": "Web Development",
    link: "https://github.com/NEVIL5249",
    "image": "/images/socketio.png"
  },
  {
    "title": "parthmetal",
    "subtitle": "Metal Business Flutter App",
    "description":
      "A mobile application built with Flutter to digitalize the workflow of Parth Metal. Provides a modern interface for business operations, customer engagement, and management tasks.",
    "tech": ["Flutter", "Dart", "Firebase"],
    "category": "Mobile Development",
    link: "https://github.com/NEVIL5249",
    "image": "/images/parthmetal.png"
  },
  {
    "title": "CMS E-Commerce",
    "subtitle": "CMS-Integrated E-Commerce Platform",
    "description":
      "A full-stack e-commerce platform combining CMS flexibility with online shopping features. Built with React.js frontend and Strapi backend. Includes Stripe integration for secure payments and responsive UI with Material UI and SASS.",
    "tech": [
      "React.js",
      "Strapi",
      "Stripe",
      "Material UI",
      "SASS",
      "Axios",
      "SQLite"
    ],
    "category": "Web Development",
    link: "https://github.com/NEVIL5249",
    "image": "/images/cms.png"
  }
];

const categories = ["All", "Web Development", "Mobile Development", "AI/ML"];
const technologies = [
  "All",
  "React",
  "Flutter",
  "Firebase",
  "Node.js",
  "Supabase",
  "Tailwind",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects = projects.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchTech = selectedTech === "All" || p.tech.includes(selectedTech);
    return matchCategory && matchTech;
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-sans">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Blue/purple corner accents */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10" />

      {/* Header */}
      <section className="relative z-10 w-full min-h-[40vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInScale">
          Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl animate-fadeIn">
          Showcasing my technical journey through real-world applications and
          experiments.
        </p>
      </section>

      {/* Filters */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category filter */}
          <div>
            <label className="mr-2 font-semibold">Filter by Category:</label>
            <select
              className="bg-gray-800 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Tech filter */}
          <div>
            <label className="mr-2 font-semibold">Filter by Tech:</label>
            <select
              className="bg-gray-800 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              {technologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 w-full flex flex-col items-center justify-start px-6 pb-16">
        <p className="text-gray-400 mb-8">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {filteredProjects.map((p, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700 shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fadeIn"
            >
              {/* Image + GitHub */}
              <div className="relative h-48 w-full bg-gray-700">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-5 h-5"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-extrabold mb-2">{p.title}</h3>
                <p className="text-indigo-400 font-semibold mb-2">
                  {p.subtitle}
                </p>
                <p className="text-gray-300 mb-4">{p.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg border border-gray-300/30 text-white text-xs md:text-sm hover:bg-gray-700/50 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
