import { useEffect, useRef, useState } from 'react';
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
        { name: 'Python', level: 75, icon: '🐍', description: 'Scripting & automation' }
      ]
    },
    {
      title: 'Database & Tools',
      description: 'Data management and development workflow',
      gradient: 'bg-gradient-to-r from-accent to-primary',
      skills: [
        { name: 'SQLite', level: 78, icon: '🗄️', description: 'Lightweight relational database' },
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
      if (isVisible) {
        const timeout = setTimeout(() => {
          setProgress(skill.level);
        }, index * 150 + 300);
        return () => clearTimeout(timeout);
      }
    }, [isVisible, skill.level, index]);

    return (
      <div 
        className="group relative p-6 bg-card hover:bg-card/80 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
        style={{ animationDelay: `${index * 0.1}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl ${gradient} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-2xl">{skill.icon}</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h4>
              <Badge variant="secondary" className="ml-2">
                {skill.level}%
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 group-hover:text-muted-foreground/80 transition-colors duration-300">
              {skill.description}
            </p>
            
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full ${gradient} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${progress}%` }}
              />
              {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Tech Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            My Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies I've mastered to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="fade-in"
              style={{ animationDelay: `${categoryIndex * 0.3}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-3 ${category.gradient} text-white px-6 py-3 rounded-2xl mb-4`}>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    gradient={category.gradient}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-20 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Full-Stack Development Capabilities
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'SQLite', 'Git'].map((tech, index) => (
                <Badge 
                  key={tech}
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Constantly learning and evolving with the latest technologies to deliver cutting-edge solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;