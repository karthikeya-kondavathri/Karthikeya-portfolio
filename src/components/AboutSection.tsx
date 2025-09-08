import { Card } from '@/components/ui/card';
import { GraduationCap, Code, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Full-Stack Developer with expertise in modern web technologies. 
            I love building responsive, dynamic, and user-friendly applications that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A dedicated developer with a passion for creating exceptional web experiences. 
                I combine technical expertise with creative problem-solving to deliver solutions 
                that exceed expectations.
              </p>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">What I Do</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack web development, creating end-to-end solutions 
                using modern technologies like HTML, CSS, JavaScript, Node.js, Express, 
                Python, and SQLite. I also work with data visualization tools like Power BI.
              </p>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my education while continuously learning and improving 
                my skills through hands-on projects and industry certifications. 
                Based in Pune, Maharashtra, I'm always eager to take on new challenges.
              </p>
            </div>
          </div>

          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <img 
                src="/lovable-uploads/65e71a0d-22d4-4aff-a7ce-a66032d2aa88.png"
                alt="Karthikeya working with various programming technologies"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Stats overlay */}
              <Card className="absolute -bottom-6 left-6 right-6 p-6 glow-card bg-background/95 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">6+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">8+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;