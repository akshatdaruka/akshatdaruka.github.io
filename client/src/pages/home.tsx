import { ParticlesBackground } from "@/components/particles-background";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { PersonalProjectsSection } from "@/components/personal-projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { HobbiesSection } from "@/components/hobbies-section";
import { ContactSection } from "@/components/contact-section";
import { PERSONAL_INFO } from "@/lib/constants";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <ParticlesBackground />
      <ScrollProgress />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <PersonalProjectsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      
      <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-300">
                © 2024 {PERSONAL_INFO.name}. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
