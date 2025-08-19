// import React from "react";
// import { Check } from "lucide-react";

// const FEATURES = [
//   {
//     title: "Full-Stack Development",
//     description: "Building responsive, scalable web and mobile applications with modern tech stacks.",
//     icon: <Check size={24} />,
//   },
//   {
//     title: "UI/UX Design",
//     description: "Crafting intuitive and visually appealing interfaces that enhance user experience.",
//     icon: <Check size={24} />,
//   },
//   {
//     title: "Mobile App Development",
//     description: "Developing performant Android and iOS applications using Flutter & React Native.",
//     icon: <Check size={24} />,
//   },
//   {
//     title: "Problem Solving",
//     description: "Strong analytical skills to solve complex problems and optimize workflows.",
//     icon: <Check size={24} />,
//   },
// ];

// const Features = () => {
//   return (
// <section
//   id="features"
//   className="relative w-full min-h-screen flex flex-col items-center justify-start pt-34 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6"
// >

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fadeInScale">
//         What I Bring to Your Team
//       </h2>
//       <p className="text-base md:text-lg text-gray-400 max-w-3xl mb-12">
//         Skills and strengths that help deliver modern digital experiences efficiently and effectively.
//       </p>

//       {/* Feature Grid */}
// {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
//   {FEATURES.map((feature, index) => (
//     <div
//       key={index}
//       className="flex flex-col items-center p-6 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-colors duration-300"
//     >
//       <div className="p-3 mb-3 rounded-full bg-gray-800 text-white">
//         {feature.icon}
//       </div>
//       <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
//         {feature.title}
//       </h3>
//       <p className="text-gray-400 text-sm md:text-base text-center">
//         {feature.description}
//       </p>
//     </div>
//   ))}
// </div> */}

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
//   {FEATURES.map((feature, index) => (
//     <div
//       key={index}
//       className="flex flex-col items-center p-6 rounded-xl
//                  bg-blue-500/10 backdrop-blur-md border border-blue-300/20
//                  hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg
//                  hover:shadow-blue-500/40
//                  transition-all duration-300"
//     >
//       <div className="p-3 mb-3 rounded-full bg-blue-500/20 backdrop-blur-sm text-white">
//         {feature.icon}
//       </div>
//       <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
//         {feature.title}
//       </h3>
//       <p className="text-gray-300 text-sm md:text-base text-center">
//         {feature.description}
//       </p>
//     </div>
//   ))}
// </div>
//     </section>

// //     <section
// //   id="features"
// //   className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center overflow-hidden py-16 px-6"
// // >
// //   {/* Heading */}
// //   <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fadeInScale">
// //     What I Bring to Your Team
// //   </h2>
// //   <p className="text-base md:text-lg text-gray-400 max-w-3xl mb-12">
// //     Skills and strengths that help deliver modern digital experiences efficiently and effectively.
// //   </p>

// //   {/* Feature Grid */}
// //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
// //     {FEATURES.map((feature, index) => (
// //       <div
// //         key={index}
// //         className="flex flex-col items-center p-6 rounded-xl bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors duration-300"
// //       >
// //         <div className="p-3 mb-3 rounded-full bg-gray-700 text-white">
// //           {feature.icon}
// //         </div>
// //         <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
// //           {feature.title}
// //         </h3>
// //         <p className="text-gray-400 text-sm md:text-base text-center">
// //           {feature.description}
// //         </p>
// //       </div>
// //     ))}
// //   </div>
// // </section>

//   );
// };

// export default Features;



// // import React from "react";
// // import { Check } from "lucide-react";

// // const FEATURES = [
// //   {
// //     title: "Full-Stack Development",
// //     description: "Building responsive, scalable web and mobile applications with modern tech stacks.",
// //     icon: <Check size={24} />,
// //   },
// //   {
// //     title: "UI/UX Design",
// //     description: "Crafting intuitive and visually appealing interfaces that enhance user experience.",
// //     icon: <Check size={24} />,
// //   },
// //   {
// //     title: "Mobile App Development",
// //     description: "Developing performant Android and iOS applications using Flutter & React Native.",
// //     icon: <Check size={24} />,
// //   },
// //   {
// //     title: "Problem Solving",
// //     description: "Strong analytical skills to solve complex problems and optimize workflows.",
// //     icon: <Check size={24} />,
// //   },
// // ];

// // const Features = () => {
// //   return (
// //     <section
// //       id="features"
// //       className="relative w-full flex flex-col items-center justify-start pt-16 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6"
// //     >
// //       {/* Heading */}
// //       <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fadeInScale">
// //         <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
// //           What I Bring to Your Team
// //         </span>
// //       </h2>
// //       <p className="text-base md:text-lg text-gray-400 max-w-3xl mb-12">
// //         Skills and strengths that help deliver modern digital experiences efficiently and effectively.
// //       </p>

// //       {/* Feature Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl w-full">
// //         {FEATURES.map((feature, index) => (
// // <div
// //   key={index}
// //   className="flex flex-col items-center p-6 rounded-xl
// //              bg-white/5 backdrop-blur-md border border-white/10
// //              hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30
// //              transition-all duration-300"
// // >
// //   <div className="p-3 mb-3 rounded-full bg-white/10 backdrop-blur-sm text-white shadow-sm">
// //     {feature.icon}
// //   </div>
// //   <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
// //     {feature.title}
// //   </h3>
// //   <p className="text-gray-300 text-sm md:text-base text-center">
// //     {feature.description}
// //   </p>
// // </div>

// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;

import React from "react";
import { Code, Briefcase, Users, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    title: "Production Ready",
    description: "Built scalable and robust solutions with a focus on reliability, performance, and best practices for enterprise systems.",
    icon: <Code size={24} />,
    color: "text-blue-400",
  },
  {
    title: "Business Impact",
    description: "Developed solutions that addressed critical business needs and delivered tangible value by improving efficiency and functionality.",
    icon: <Briefcase size={24} />,
    color: "text-purple-400",
  },
  {
    title: "Team Collaboration",
    description: "Worked closely with teams to deliver projects on time, participating in code reviews and agile methodologies.",
    icon: <Users size={24} />,
    color: "text-pink-400",
  },
  {
    title: "Continuous Learning",
    description: "Proactively acquired new skills and adopted emerging technologies to stay ahead in a dynamic technical landscape.",
    icon: <TrendingUp size={24} />,
    color: "text-indigo-400",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-34 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fadeInScale">
        What I Bring to Your Team
      </h2>
      <p className="text-base md:text-lg text-gray-400 max-w-3xl mb-12">
        Skills and strengths that help deliver modern digital experiences efficiently and effectively.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-xl
                     bg-white/5 backdrop-blur-md border border-white/10
                     hover:scale-105 hover:shadow-lg hover:shadow-gray-800/30
                     transition-all duration-300"
          >
            <div className="p-3 mb-3 rounded-full bg-white/10 backdrop-blur-sm shadow-sm">
              {React.cloneElement(feature.icon, { className: feature.color })}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;