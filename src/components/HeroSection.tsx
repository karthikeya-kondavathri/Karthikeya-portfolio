import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Eye } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Full-Stack Developer",
    "Creative Thinker",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 sm:pt-40 md:pt-48"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-bg opacity-80"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in visible">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            Hi, I'm{" "}
            <span className="text-gradient bg-gradient-to-r from-white to-primary-glow">
              Karthikeya
            </span>{" "}
            👋
          </h1>

          {/* Typing animation */}
          <div className="h-10 sm:h-12 md:h-16 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-medium text-white/90">
              <span className="typing-text">{displayText}</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-xl text-white/80 mb-8 sm:mb-12 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            Passionate about creating responsive, dynamic, and user-friendly
            applications with modern web technologies
          </p>

          {/* Buttons (fixed width issue) */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button
              size="sm"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2 sm:py-4 md:py-5 rounded-lg sm:rounded-xl"
              onClick={() => scrollToSection("projects")}
            >
              <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View My Work
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-orange hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2 sm:py-4 md:py-5 rounded-lg sm:rounded-xl backdrop-blur-sm"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
          </div>

          {/* Scroll down arrow */}
          <div
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white/60 mx-auto hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
