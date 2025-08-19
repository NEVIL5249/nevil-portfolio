// import React from "react";

// const TECH_STACK = [
//   "React.js",
//   "Next.js",
//   "Tailwind CSS",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "Flutter",
//   "Firebase",
//   "Git",
//   "TypeScript",
// ];

// const TechArsenal = () => {
//   return (
//     <section
//       id="tech"
//       className="relative w-full min-h-screen flex flex-col items-center justify-start pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6"
//     >
//               <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-20" />

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fadeInScale">
//         My Tech Arsenal
//       </h2>
//       <p className="text-base md:text-lg text-gray-400 max-w-3xl mb-12">
//         The tools and technologies I use to build modern web & mobile applications.
//       </p>

//       {/* Tech badges */}
//       <div className="flex flex-wrap justify-center gap-4 max-w-5xl w-full">
//         {TECH_STACK.map((tech, index) => (
//           <div
//             key={index}
//             className="px-5 py-3 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-300/30
//                        text-white font-medium text-sm md:text-base
//                        hover:bg-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40
//                        transition-all duration-300 cursor-default"
//           >
//             {tech}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TechArsenal;


// import React from "react";

// const TECH_CATEGORIES = [
//   {
//     title: "Frontend",
//     skills: ["React.js","Next.js", "Tailwind CSS", "Material UI", "TypeScript", "HTML5", "CSS3"],
//   },
//   {
//     title: "Backend",
//     skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "GraphQL", "JWT"],
//   },
//   {
//     title: "Mobile",
//     skills: ["Flutter", "React Native", "Android Studio", "kotlin"],
//   },
//   {
//     title: "Tools & DevOps",
//     skills: ["Git", "GitHub", "Firebase", "Docker", "Aws", "Vercel", "Netlify", "CI/CD"],
//   },
// ];

// const TechArsenal = () => {
//   return (
//     <section
//       id="tech"
//       className="relative w-full min-h-screen flex flex-col items-center justify-start pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6"
//     >
//               <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-20" />

//       {/* Heading */}
// <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fadeInScale">
//               My Tech Arsenal

//         <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
//         </span>
//       </h2>

//       <p className="text-base md:text-lg text-gray-400 max-w-3xl mb-12">
//         The tools and technologies I use to build modern web & mobile applications.
//       </p>

//       {/* Categories */}
//       <div className="flex flex-col gap-10 max-w-5xl w-full text-left">
//         {TECH_CATEGORIES.map((category, index) => (
//           <div key={index}>
// <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/70 backdrop-blur-sm">
//   {category.title}
// </h3>

//             <div className="flex flex-wrap gap-4">
//               {category.skills.map((skill, i) => (
//                 <div
//                   key={i}
//                   className="px-4 py-2 rounded-xl
//                              backdrop-blur-md border border-blue-300/30
//                              text-white font-medium text-sm md:text-base
//                              hover:bg-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40
//                              transition-all duration-300 cursor-default"
//                 >
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TechArsenal;


import React from "react";

const TECH_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React.js","Next.js", "Tailwind CSS", "Material UI", "TypeScript", "HTML5", "CSS3"],
    color: "text-blue-400",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "GraphQL", "JWT"],
    color: "text-purple-400",
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "Android Studio", "Kotlin"],
    color: "text-pink-400",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Firebase", "Docker", "AWS", "Vercel", "Netlify", "CI/CD"],
    color: "text-indigo-400",
  },
];

const TechArsenal = () => {
  return (
    <section
      id="tech"
      className="relative w-full min-h-screen pb-5 flex flex-col items-center justify-start pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-20" />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fadeInScale">
        My Tech Arsenal
      </h2>

      <p className="text-base md:text-lg text-gray-400 max-w-3xl mb-12">
        The tools and technologies I use to build modern web & mobile applications.
      </p>

      {/* Categories */}
      <div className="flex flex-col gap-10 max-w-5xl w-full text-left">
        {TECH_CATEGORIES.map((category, index) => (
          <div key={index}>
            <h3 className={`text-xl md:text-2xl font-semibold mb-4 backdrop-blur-sm ${category.color}`}>
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-xl 
                             backdrop-blur-md border border-blue-300/30
                             text-white font-medium text-sm md:text-base
                             hover:bg-gray-500/30 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/40
                             transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechArsenal;
