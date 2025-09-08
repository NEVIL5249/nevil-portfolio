import React from "react";

const experiences = [
    {
    role: "Fullstack Web Developer Intern",
    company: "Compughost",
    type: "Internship",
    location: "City, State",
    duration: "May 2024 - June 2024",
    description: `Collaborated with a team of developers to design and implement full-stack web applications using the MERN stack. Developed both frontend and backend features for client projects, ensuring responsive and user-friendly interfaces. Optimized application performance and troubleshooted issues to enhance the user experience.`,
    technologies: ["MERN Stack (MongoDB, Express.js, React, Node.js)", "JavaScript", "HTML/CSS", "REST APIs", "Git"],
    highlights: [
      {
        title: "Full-Stack Development",
        details: "Designed and built both frontend and backend features for web applications."
      },
      {
        title: "Team Collaboration",
        details: "Worked with senior developers, participating in code reviews and improving team coding standards."
      },
      {
        title: "User Experience (UX) Enhancement",
        details: "Optimized application performance and resolved issues to improve user experience."
      },
      {
        title: "Project Delivery",
        details: "Delivered a complete e-commerce bookstore project with core functionalities."
      }
    ]
  },
  {
    role: "Python and SAS Developer Intern",
    company: "Edulyt",
    type: "Internship",
    location: "City, State",
    duration: "June 2024 - July 2024",
    description: `Developed and maintained data analysis scripts and pipelines using Python and SAS. Performed statistical analysis and generated reports to support business decision-making. Collaborated with data scientists and analysts to design and implement new data models.`,
    technologies: ["Python", "SAS", "Pandas", "SQL", "Data Processing", "Statistical Analysis", "Data Modeling"],
    highlights: [
      {
        title: "Data Automation",
        details: "Created automated pipelines to streamline data processing and reporting."
      },
      {
        title: "Statistical Analysis",
        details: "Analyzed large datasets to extract insights for data-driven strategies."
      },
      {
        title: "Collaboration",
        details: "Worked with a team of data scientists and analysts to implement new models."
      },
      {
        title: "Tool Proficiency",
        details: "Gained hands-on experience developing scripts with Python and SAS."
      }
    ]
  }
];

const ExperiencePage = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">

      {/* First Viewport */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6">
          Experience
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-3xl">
          My professional journey in artificial intelligence and software development
        </p>
      </section>

      {/* Second Viewport */}
      <section className="w-full flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-16 gap-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-full max-w-5xl p-8 rounded-2xl bg-gray-500/10 backdrop-blur-md border border-blue-300/20 shadow-lg"
          >
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold">{exp.role}</h2>
              <p className="text-indigo-400 font-semibold">{exp.company} • {exp.type}</p>
              <p className="text-gray-400">{exp.location} | {exp.duration}</p>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6">{exp.description}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white/70">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-300/30 text-white text-sm md:text-base hover:bg-gray-500/20 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
<div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/70">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-500/10 backdrop-blur-md border  border-gray-300/30 text-white font-medium  hover:bg-gray-500/20 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/40 transition-all">
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p>{highlight.details}</p>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ExperiencePage;
