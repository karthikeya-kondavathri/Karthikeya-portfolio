"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const emojis = ["🔥", "🚀", "✨", "🎉", "💻", "⚡", "😎", "🌟"];

  // Typing effect logic
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
    }, isDeleting ? 40 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Emoji burst effect
  const handleEmojiClick = (e: React.MouseEvent) => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const span = document.createElement("span");
    span.textContent = emoji;
    Object.assign(span.style, {
      position: "absolute",
      left: e.clientX + "px",
      top: e.clientY + "px",
      fontSize: "1.5rem",
      pointerEvents: "none",
      transition: "all 1.2s ease-out",
      opacity: "1",
      zIndex: "9999",
    });
    document.body.appendChild(span);
    requestAnimationFrame(() => {
      span.style.transform = "translateY(-100px) scale(1.5)";
      span.style.opacity = "0";
    });
    setTimeout(() => span.remove(), 1200);
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden perspective-1000"
      onClick={handleEmojiClick}
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Layers */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: 'translateZ(-100px) scale(1.1)'
        }}
        initial={{ scale: 1.2, rotateX: 10 }}
        animate={{ scale: 1, rotateX: 0 }}
        transition={{ duration: 8, ease: "easeInOut" }}
      />

      {/* 3D Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
        initial={{ rotateX: -5 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 6, ease: "easeInOut" }}
      />

      {/* 3D Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateZ(${Math.random() * 200 - 100}px)`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 1, 0.2],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 3D Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border border-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            transform: `translateZ(${Math.random() * 300 - 150}px) rotateZ(${Math.random() * 360}deg)`,
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Main 3D Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        initial={{ 
          rotateX: -15, 
          translateY: 50,
          opacity: 0 
        }}
        animate={{ 
          rotateX: 0, 
          translateY: 0,
          opacity: 1 
        }}
        whileHover={{ 
          rotateY: 5, 
          rotateX: -3,
          scale: 1.02
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          duration: 1.5
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 3D Main Title */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
          initial={{ 
            opacity: 0, 
            y: 50,
            rotateX: -20,
            scale: 0.8
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            scale: 1
          }}
          transition={{ 
            duration: 1.5,
            type: "spring",
            stiffness: 100
          }}
          style={{ 
            transformStyle: 'preserve-3d',
            textShadow: '0 0 30px rgba(255,255,255,0.3)'
          }}
        >
          Hi, I'm{" "}
          <motion.span 
            className="bg-gradient-to-r from-orange-400 via-yellow-300 to-pink-400 text-transparent bg-clip-text"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileHover={{ 
              rotateY: 10,
              scale: 1.05,
              textShadow: '0 0 20px rgba(255,165,0,0.5)'
            }}
          >
            Karthikeya
          </motion.span>{" "}
          <motion.span
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{ rotate: 15, scale: 1.2 }}
          >
            👋
          </motion.span>
        </motion.h1>

        {/* 3D Typing Text */}
        <motion.h2
          className="text-lg sm:text-2xl md:text-4xl text-white/90 mb-4 sm:mb-8"
          initial={{ 
            opacity: 0,
            rotateX: -15,
            translateZ: -50
          }}
          animate={{ 
            opacity: 1,
            rotateX: 0,
            translateZ: 0
          }}
          transition={{ delay: 0.8, duration: 1.2 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.span
            whileHover={{ 
              rotateY: 5,
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {displayText}
          </motion.span>
          <motion.span 
            className="animate-pulse text-orange-400"
            animate={{ 
              opacity: [1, 0, 1],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            |
          </motion.span>
        </motion.h2>

        {/* 3D Subtitle */}
        <motion.p 
          className="text-sm sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ 
            opacity: 0,
            y: 30,
            rotateX: -10
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            rotateX: 0
          }}
          transition={{ delay: 1.2, duration: 1 }}
          whileHover={{ 
            rotateY: 2,
            scale: 1.01
          }}
        >
          Passionate about crafting dynamic, responsive, and engaging digital
          experiences using modern web technologies.
        </motion.p>

        {/* 3D Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          initial={{ 
            opacity: 0, 
            y: 50,
            rotateX: -20
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotateX: 0
          }}
          transition={{ delay: 1.5, duration: 1.2 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            whileHover={{ 
              rotateY: 10,
              scale: 1.05,
              translateZ: 20
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="sm"
              className="bg-white/10 border border-white/30 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 shadow-2xl"
              onClick={() => scrollToSection("projects")}
              style={{ 
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transformStyle: 'preserve-3d'
              }}
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring" }}
              >
                <Eye className="mr-2 h-5 w-5" />
              </motion.div>
              View My Work
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ 
              rotateY: -10,
              scale: 1.05,
              translateZ: 20
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-white/40 text-orange-300 hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl"
              style={{ 
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transformStyle: 'preserve-3d'
              }}
            >
              <a href="/Karthikeya-resume.pdf" download>
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring" }}
                >
                  <Download className="mr-2 h-5 w-5" />
                </motion.div>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D Scroll Icon */}
        <motion.div
          className="cursor-pointer text-white/60 hover:text-white"
          initial={{ 
            opacity: 0,
            y: 20,
            rotateX: -15
          }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0],
            rotateX: 0
          }}
          transition={{ 
            delay: 2,
            duration: 1,
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
          whileHover={{ 
            scale: 1.2,
            rotateY: 10,
            translateZ: 10
          }}
          onClick={() => scrollToSection("about")}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
