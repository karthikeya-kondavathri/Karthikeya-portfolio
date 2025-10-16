"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  // ✅ Auto-slide effect using carousel api
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const projects = [
    {
      name: "Todos Application",
      description:
        "A comprehensive todo management app with persistent storage, featuring full CRUD operations, priority levels, and category organization using vanilla JavaScript and LocalStorage.",
      link: "https://kktodolist.ccbp.tech/",
      github: "#",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "LocalStorage"],
      gradient: "from-blue-500 to-purple-600",
      features: [
        "CRUD Operations",
        "Persistent Storage",
        "Responsive Design",
        "Interactive UI",
      ],
    },
    {
      name: "Food Munch",
      description:
        "A modern, responsive website for a food delivery service featuring dynamic menus, promotional offers, video content, and seamless user experience across all devices.",
      link: "https://foodmunchkkk.ccbp.tech/",
      github: "#",
      tech: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
      gradient: "from-green-500 to-teal-600",
      features: [
        "Responsive Layout",
        "Video Integration",
        "Modern Design",
        "Cross-browser Compatible",
      ],
    },
    {
      name: "Data Analyst Dashboard",
      description:
        "An interactive Power BI dashboard for Karthikeya Real Mart showcasing comprehensive business analytics, KPIs, sales trends, and actionable insights for data-driven decision making.",
      link: "#",
      github: "#",
      tech: ["Power BI", "Excel", "Data Analysis", "Kaggle"],
      gradient: "from-orange-500 to-red-600",
      features: [
        "Interactive Charts",
        "KPI Tracking",
        "Data Visualization",
        "Business Intelligence",
      ],
    },
    {
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Features include admin panel, inventory management, and order tracking.",
      link: "#",
      github: "#",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      gradient: "from-purple-500 to-pink-600",
      features: [
        "User Authentication",
        "Payment Gateway",
        "Admin Panel",
        "Order Management",
      ],
    },
    {
      name: "Weather Forecast App",
      description:
        "A responsive weather application providing real-time weather data, 7-day forecasts, and location-based services. Includes weather maps, alerts, and personalized weather recommendations.",
      link: "#",
      github: "#",
      tech: ["React", "TypeScript", "Weather API", "Tailwind CSS", "PWA"],
      gradient: "from-cyan-500 to-blue-600",
      features: [
        "Real-time Data",
        "Location Services",
        "Weather Maps",
        "PWA Support",
      ],
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-background relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * 300 - 150}px)`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 3D Header */}
        <motion.div 
          className="text-center mb-16"
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
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            whileHover={{ 
              rotateY: 5,
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Featured <motion.span 
              className="text-gradient"
              whileHover={{ 
                rotateY: 15,
                scale: 1.05
              }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateX: 2,
              scale: 1.01
            }}
          >
            Here are some of my recent projects that showcase my skills and
            experience in web development
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.name}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ 
                      opacity: 0,
                      y: 50,
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
                      translateZ: 30
                    }}
                    viewport={{ once: true }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Card
                      className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl 
                      transition-all duration-500 h-full"
                    >
                      {/* 3D Top Gradient Banner */}
                      <motion.div 
                        className="relative h-48 overflow-hidden"
                        whileHover={{ 
                          rotateX: 2,
                          scale: 1.05
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                          animate={{ 
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div 
                            className="text-white text-center"
                            animate={{ 
                              y: [0, -5, 0],
                              rotateY: [0, 5, 0]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <motion.div 
                              className="text-4xl mb-2"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              🚀
                            </motion.div>
                            <div className="text-sm font-medium">{project.name}</div>
                          </motion.div>
                        </div>
                        <motion.div 
                          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          initial={{ rotateX: 90 }}
                          whileHover={{ rotateX: 0 }}
                        >
                          <motion.div 
                            className="text-white text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Eye className="h-8 w-8 mx-auto mb-2" />
                            </motion.div>
                            <div className="text-sm">View Project</div>
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      <CardHeader className="pb-4">
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.name}
                          </CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </motion.div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                            Key Features:
                          </h4>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            {project.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                className="flex items-center gap-1 text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <motion.div 
                                  className="w-1 h-1 bg-primary rounded-full"
                                  animate={{ scale: [1, 1.5, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                                />
                                {feature}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                            Tech Stack:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ scale: 0, rotateY: -90 }}
                                whileInView={{ scale: 1, rotateY: 0 }}
                                transition={{ 
                                  duration: 0.5,
                                  delay: techIndex * 0.1,
                                  type: "spring",
                                  stiffness: 200
                                }}
                                whileHover={{ 
                                  scale: 1.1,
                                  rotateY: 10,
                                  translateZ: 5
                                }}
                                viewport={{ once: true }}
                                style={{ transformStyle: 'preserve-3d' }}
                              >
                                <Badge variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex gap-2 pt-4"
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {project.link !== "#" && (
                            <motion.div
                              whileHover={{ scale: 1.05, rotateY: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                size="sm"
                                className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                onClick={() => window.open(project.link, "_blank")}
                              >
                                <motion.div
                                  whileHover={{ rotate: 5 }}
                                  transition={{ type: "spring" }}
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                </motion.div>
                                Live Demo
                              </Button>
                            </motion.div>
                          )}
                          <motion.div
                            whileHover={{ scale: 1.05, rotateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              disabled={project.github === "#"}
                            >
                              <motion.div
                                whileHover={{ rotate: 5 }}
                                transition={{ type: "spring" }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                              </motion.div>
                              Code
                            </Button>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <motion.div
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <CarouselPrevious className="left-4 bg-background/80 border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-2xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotateY: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <CarouselNext className="right-4 bg-background/80 border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-2xl" />
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
