import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-20 bg-background relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * 200 - 100}px)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3D Heading */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
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
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            whileHover={{ 
              rotateY: 5,
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About <motion.span 
              className="text-gradient"
              whileHover={{ 
                rotateY: 10,
                scale: 1.05
              }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateX: 2,
              scale: 1.01
            }}
          >
            I'm a passionate Full-Stack Developer with expertise in modern web
            technologies. I love building responsive, dynamic, and user-friendly
            applications that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* 3D Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Side - 3D Info Cards */}
          <div className="space-y-8">
            {/* Who I Am - 3D Card */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, x: -50, rotateY: -90 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: 5,
                scale: 1.02,
                translateZ: 20
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <motion.div 
                    className="p-2 sm:p-3 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Who I Am
                  </motion.h3>
                </div>
                <motion.p 
                  className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                  whileHover={{ x: 5 }}
                >
                  A dedicated developer with a passion for creating exceptional
                  web experiences. I combine technical expertise with creative
                  problem-solving to deliver solutions that exceed expectations.
                </motion.p>
              </Card>
            </motion.div>

            {/* What I Do - 3D Card */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, x: -50, rotateY: -90 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: -5,
                scale: 1.02,
                translateZ: 20
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <motion.div 
                    className="p-2 sm:p-3 bg-secondary/10 rounded-lg"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <Code className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    What I Do
                  </motion.h3>
                </div>
                <motion.p 
                  className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                  whileHover={{ x: 5 }}
                >
                  I specialize in full-stack web development, creating end-to-end
                  solutions using modern technologies like HTML, CSS, JavaScript,
                  Node.js, Express, Python, and SQLite. I also work with data
                  visualization tools like Power BI.
                </motion.p>
              </Card>
            </motion.div>

            {/* My Journey - 3D Card */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, x: -50, rotateY: -90 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: 5,
                scale: 1.02,
                translateZ: 20
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <motion.div 
                    className="p-2 sm:p-3 bg-accent/10 rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    My Journey
                  </motion.h3>
                </div>
                <motion.p 
                  className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                  whileHover={{ x: 5 }}
                >
                  I actively enhance my expertise through practical projects and industry certifications, driven by a commitment to continuous learning and self-improvement. Passionate about tackling new challenges, I aim to grow consistently while making meaningful contributions. 
                </motion.p>
              </Card>
            </motion.div>
          </div>

          {/* Right Side - 3D Image & Stats */}
          <motion.div 
            className="relative max-w-lg mx-auto lg:max-w-none"
            initial={{ 
              opacity: 0,
              x: 50,
              rotateY: 90
            }}
            whileInView={{ 
              opacity: 1,
              x: 0,
              rotateY: 0
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ 
                rotateY: 5,
                scale: 1.02,
                translateZ: 30
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.img
                src="/lovable-uploads/65e71a0d-22d4-4aff-a7ce-a66032d2aa88.png"
                alt="Karthikeya working with various programming technologies"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 2
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"
                whileHover={{ opacity: 0.8 }}
              />

              {/* 3D Stats overlay */}
              <motion.div
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  rotateY: 5,
                  translateZ: 20
                }}
              >
                <Card
                  className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 
                  p-4 sm:p-6 bg-background/95 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{ type: "spring" }}
                    >
                      <motion.div 
                        className="text-lg sm:text-xl md:text-2xl font-bold text-primary"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        5+
                      </motion.div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Projects
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                      transition={{ type: "spring" }}
                    >
                      <motion.div 
                        className="text-lg sm:text-xl md:text-2xl font-bold text-secondary"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        10+
                      </motion.div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Certifications
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{ type: "spring" }}
                    >
                      <motion.div 
                        className="text-lg sm:text-xl md:text-2xl font-bold text-accent"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        9+
                      </motion.div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Technologies
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                      transition={{ type: "spring" }}
                    >
                      <motion.div 
                        className="text-lg sm:text-xl md:text-2xl font-bold text-primary"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                      >
                        1+
                      </motion.div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
