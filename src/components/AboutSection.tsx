import { Card } from "@/components/ui/card";
import { GraduationCap, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Full-Stack Developer with expertise in modern web
            technologies. I love building responsive, dynamic, and user-friendly
            applications that solve real-world problems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Side - Info */}
          <div className="space-y-8">
            {/* Who I Am */}
            <div className="fade-in">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                A dedicated developer with a passion for creating exceptional
                web experiences. I combine technical expertise with creative
                problem-solving to deliver solutions that exceed expectations.
              </p>
            </div>

            {/* What I Do */}
            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-secondary/10 rounded-lg">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">What I Do</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack web development, creating end-to-end
                solutions using modern technologies like HTML, CSS, JavaScript,
                Node.js, Express, Python, and SQLite. I also work with data
                visualization tools like Power BI.
              </p>
            </div>

            {/* My Journey */}
            <div className="fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">My Journey</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              I actively enhance my expertise through practical projects and industry certifications, driven by a commitment to continuous learning and self-improvement. Passionate about tackling new challenges, I aim to grow consistently while making meaningful contributions. 
              </p>
            </div>
          </div>

          {/* Right Side - Image & Stats */}
          <div className="fade-in relative max-w-lg mx-auto lg:max-w-none" style={{ animationDelay: "0.6s" }}>
            <div className="relative group">
              <img
                src="/lovable-uploads/65e71a0d-22d4-4aff-a7ce-a66032d2aa88.png"
                alt="Karthikeya working with various programming technologies"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

              {/* Stats overlay */}
              <Card
                className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 
                p-4 sm:p-6 glow-card bg-background/95 backdrop-blur-sm"
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                      3+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Projects
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
                      6+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Certifications
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-accent">
                      8+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Technologies
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                      1+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Years Experience
                    </div>
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
