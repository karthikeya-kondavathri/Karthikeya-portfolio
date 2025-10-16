import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Creating beautiful and responsive user interfaces',
      gradient: 'bg-gradient-primary',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐', description: 'Semantic markup & accessibility' },
        { name: 'CSS3', level: 90, icon: '🎨', description: 'Animations & responsive design' },
        { name: 'JavaScript', level: 85, icon: '⚡', description: 'Modern ES6+ & async programming' },
        { name: 'React', level: 82, icon: '⚛️', description: 'Component-based architecture' },
        { name: 'Bootstrap', level: 88, icon: '📱', description: 'Rapid responsive prototyping' }
      ]
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications',
      gradient: 'bg-gradient-secondary',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢', description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 82, icon: '🚀', description: 'Web application framework' },
        { name: 'Python', level: 80, icon: '🐍', description: 'Scripting & automation' }
      ]
    },
    {
      title: 'Database & Tools',
      description: 'Data management and development workflow',
      gradient: 'bg-gradient-to-r from-accent to-primary',
      skills: [
        { name: 'SQLite', level: 85, icon: '🗄️', description: 'Lightweight relational database' },
        { name: 'Git', level: 85, icon: '📚', description: 'Version control & collaboration' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({ skill, index, gradient }: { skill: any, index: number, gradient: string }) => {
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setProgress(skill.level);
        }, index * 150 + 300);
        return () => clearTimeout(timeout);
    }, [skill.level, index]);

    return (
      <motion.div 
        className="group relative p-6 bg-card hover:bg-card/80 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
        initial={{ 
          opacity: 0,
          y: 30,
          rotateX: -20
        }}
        whileInView={{ 
          opacity: 1,
          y: 0,
          rotateX: 0
        }}
        transition={{ 
          duration: 0.6,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          rotateY: 5,
          scale: 1.02,
          translateZ: 20
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-start gap-4">
          <motion.div 
            className={`p-3 rounded-xl ${gradient} text-white flex-shrink-0 shadow-lg`}
            whileHover={{ 
              scale: 1.15,
              rotateY: 10,
              rotateZ: 5
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span 
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {skill.icon}
            </motion.span>
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <motion.h4 
                className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.h4>
              <motion.div
                whileHover={{ scale: 1.1, rotateY: 10 }}
                transition={{ type: "spring" }}
              >
                <Badge variant="secondary" className="ml-2">
                  {skill.level}%
                </Badge>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-sm text-muted-foreground mb-4 group-hover:text-muted-foreground/80 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              {skill.description}
            </motion.p>
            
            <div className="relative h-2 bg-muted rounded-full overflow-hidden shadow-inner">
              <motion.div
                className={`absolute top-0 left-0 h-full ${gradient} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                style={{ 
                  boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                  transform: 'translateZ(10px)'
                }}
              />

              {isHovered && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden" 
      ref={sectionRef}
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30" />
      
      {/* 3D Floating Orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3D Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateZ(${Math.random() * 200 - 100}px)`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* 3D Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ 
            opacity: 0,
            y: 50,
            rotateX: -30
          }}
          whileInView={{ 
            opacity: 1,
            y: 0,
            rotateX: 0
          }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ 
              rotateY: 10,
              scale: 1.05,
              translateZ: 10
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Tech Expertise
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            whileHover={{ 
              rotateY: 5,
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Tech <motion.span 
              className="text-gradient"
              whileHover={{ 
                rotateY: 15,
                scale: 1.05
              }}
            >
              Arsenal
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateX: 2,
              scale: 1.01
            }}
          >
            A comprehensive toolkit of modern technologies I've mastered to build exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* 3D Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              initial={{ 
                opacity: 0,
                y: 50,
                rotateX: -30
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                rotateX: 0
              }}
              transition={{ 
                duration: 0.8,
                delay: categoryIndex * 0.3,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Category Header */}
              <motion.div 
                className="text-center mb-12"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`inline-flex items-center gap-3 ${category.gradient} text-white px-6 py-3 rounded-2xl mb-4 shadow-lg`}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    translateZ: 20
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </motion.div>
                <motion.p 
                  className="text-muted-foreground max-w-2xl mx-auto"
                  whileHover={{ 
                    rotateX: 2,
                    scale: 1.01
                  }}
                >
                  {category.description}
                </motion.p>
              </motion.div>

              {/* 3D Skills Grid */}
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: categoryIndex * 0.3 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    gradient={category.gradient}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 3D Tech Stack Summary */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ 
            opacity: 0,
            y: 50,
            rotateX: -30
          }}
          whileInView={{ 
            opacity: 1,
            y: 0,
            rotateX: 0
          }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl"
            whileHover={{ 
              rotateY: 5,
              scale: 1.02,
              translateZ: 20
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-foreground mb-6"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5
              }}
            >
              Full-Stack Development Capabilities
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'SQLite', 'Git'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ 
                    opacity: 0,
                    scale: 0,
                    rotateY: -90
                  }}
                  whileInView={{ 
                    opacity: 1,
                    scale: 1,
                    rotateY: 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    translateZ: 10
                  }}
                  viewport={{ once: true }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer shadow-lg"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
            <motion.p 
              className="text-muted-foreground mt-6 max-w-2xl mx-auto"
              whileHover={{ 
                rotateX: 2,
                scale: 1.01
              }}
            >
              Constantly learning and evolving with the latest technologies to deliver cutting-edge solutions
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;