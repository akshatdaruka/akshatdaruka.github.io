import { motion } from "framer-motion";
import { ChevronDown, Download, Rocket, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4 font-sans text-white dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-blue-500">Akshat</span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              style={{ 
                overflow: "hidden",
                borderRight: "3px solid #007AFF",
                animation: "blink 0.75s step-end infinite"
              }}
            >
              Daruka
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {PERSONAL_INFO.subtitle}
          </motion.p>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToNext()}
          >
            <Rocket className="w-5 h-5" />
            View My Work
          </motion.button>
          
          <motion.a
            href="/assets/Akshat_Daruka_Resume.pdf"
            download="Akshat_Daruka_Resume.pdf"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
        
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-2xl text-gray-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-8 h-8" />
          </motion.a>
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-500 cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
