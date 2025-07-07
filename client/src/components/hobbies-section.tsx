import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { HOBBIES } from "@/lib/constants";
import { Music, Activity, Waves, PenTool, Telescope } from "lucide-react";

const iconMap = {
  "music": Music,
  "activity": Activity, 
  "waves": Waves,
  "pen-tool": PenTool,
  "telescope": Telescope,
};

export function HobbiesSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="hobbies" ref={ref} className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Hobbies & <span className="text-blue-500">Interests</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOBBIES.map((hobby, index) => {
            const Icon = iconMap[hobby.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      hobby.color === 'accent' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className={`w-8 h-8 ${hobby.color === 'accent' ? 'text-blue-500' : 'text-purple-500'}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{hobby.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            When I'm not building products or writing code, I find balance through these diverse interests 
            that keep me creative, active, and constantly learning about the world around us.
          </p>
        </motion.div>
      </div>
    </section>
  );
}