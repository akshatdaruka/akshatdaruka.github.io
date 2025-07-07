import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="text-blue-500">Me</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I build products with a developer's precision and a strategist's mindset. With 3+ years of hands-on experience 
              across fintech, media, and manufacturing ops, I've led product rollouts, re-architected user journeys, and 
              coded scalable backend systems.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Currently pursuing a Master's in Data & Knowledge Engineering in Germany, I bring sharp technical skills, 
              deep product empathy, and a bias for action to every challenge I take on.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {["Product Management", "Backend Development", "Data Engineering", "Strategy"].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern workspace with code on screen"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              className="absolute -top-4 -right-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/20 dark:border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/20 dark:border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">150%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Traffic Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
