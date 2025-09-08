// src/components/FloatingNav.jsx
import { motion } from "framer-motion";
import { Home, User, FolderGit2, Briefcase, BookOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { id: "home", icon: <Home className="h-5 w-5" />, label: "Home" },
  { id: "about", icon: <User className="h-5 w-5" />, label: "About" },
  { id: "projects", icon: <FolderGit2 className="h-5 w-5" />, label: "Projects" },
  { id: "experience", icon: <Briefcase className="h-5 w-5" />, label: "Experience" },
  { id: "skills", icon: <BookOpen className="h-5 w-5" />, label: "Skills" },
  { id: "contact", icon: <FileText className="h-5 w-5" />, label: "Contact" },
];

export default function FloatingNav() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex gap-4 rounded-full bg-neutral-900/80 backdrop-blur-md px-5 py-3 border border-white/10 shadow-lg">
        {navItems.map((item) => (
          <>
            {item.id === "experience" || item.id === "projects" || item.id === "contact" ? (
              <Link
                key={item.id}
                to={item.id === "experience" ? "/experience" : item.id === "projects" ? "/projects" : "/contact"}
                className="p-3 rounded-full hover:bg-neutral-800 transition flex items-center justify-center text-white"
              >
                {item.icon}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.id === "skills" ? "#tech" : item.id === "about" ? "#features" : `#${item.id}`}
                className="p-3 rounded-full hover:bg-neutral-800 transition flex items-center justify-center text-white"
              >
                {item.icon}
              </a>
            )}
          </>
        ))}
      </div>
    </motion.div>
  );
}
