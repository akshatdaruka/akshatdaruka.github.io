import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { CERTIFICATIONS } from "@/lib/constants";
import { Award, Code, Database, Globe, ExternalLink } from "lucide-react";

const iconMap = {
  "award": Award,
  "code": Code,
  "database": Database,
  "globe": Globe,
};

export function CertificationsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="certifications" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Certifications & <span className="text-blue-500">Achievements</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = iconMap[cert.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-500/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-blue-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{cert.title}</h3>
                  <p className="text-purple-500 font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{cert.date}</p>
                </div>
                
                {cert.credentialId && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-400">Credential ID: {cert.credentialId}</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        skillIndex % 2 === 0 
                          ? 'bg-blue-500/20 text-blue-500' 
                          : 'bg-purple-500/20 text-purple-500'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}