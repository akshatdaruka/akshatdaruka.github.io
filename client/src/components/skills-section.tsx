import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SKILLS } from "@/lib/constants";
import { TrendingUp, Code, Users } from "lucide-react";

const iconMap = {
  "chart-line": TrendingUp,
  "code": Code,
  "project-diagram": Users,
};

export function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & <span className="text-blue-500">Expertise</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillCategory, index) => {
            const Icon = iconMap[skillCategory.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      skillCategory.color === 'accent' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className={`w-8 h-8 ${skillCategory.color === 'accent' ? 'text-blue-500' : 'text-purple-500'}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">{skillCategory.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                        <span className={`text-sm ${skillCategory.color === 'accent' ? 'text-blue-500' : 'text-purple-500'}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            skillCategory.color === 'accent' 
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                              : 'bg-gradient-to-r from-purple-500 to-purple-600'
                          }`}
                          initial={{ width: 0 }}
                          animate={isIntersecting ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: index * 0.2 + skillIndex * 0.1 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
