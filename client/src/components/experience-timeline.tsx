import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { EXPERIENCE } from "@/lib/constants";
import { Briefcase, Tv, Code, GraduationCap } from "lucide-react";

const iconMap = {
  briefcase: Briefcase,
  tv: Tv,
  code: Code,
  "graduation-cap": GraduationCap,
};

export function ExperienceTimeline() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experience <span className="text-blue-500">Timeline</span>
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
          
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const Icon = iconMap[exp.icon as keyof typeof iconMap];
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.id}
                  className="flex items-center"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {isLeft ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <motion.div
                          className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          <h3 className={`text-xl font-bold mb-2 ${exp.color === 'accent' ? 'text-blue-500' : 'text-purple-500'}`}>
                            {exp.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</p>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>• {achievement}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                      <motion.div
                        className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative ${
                          exp.color === 'accent' ? 'bg-blue-500' : 'bg-purple-500'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        initial={{ scale: 0 }}
                        animate={isIntersecting ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="w-1/2 pl-8" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8" />
                      <motion.div
                        className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative ${
                          exp.color === 'accent' ? 'bg-blue-500' : 'bg-purple-500'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        initial={{ scale: 0 }}
                        animate={isIntersecting ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="w-1/2 pl-8">
                        <motion.div
                          className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          <h3 className={`text-xl font-bold mb-2 ${exp.color === 'accent' ? 'text-blue-500' : 'text-purple-500'}`}>
                            {exp.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</p>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>• {achievement}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
