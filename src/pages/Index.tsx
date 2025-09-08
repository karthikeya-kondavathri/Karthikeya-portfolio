import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Add scroll animation triggers
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-primary">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm">
                © 2024 Karthikeya Kondavathri. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span>Made with ❤️ using React & TypeScript</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
