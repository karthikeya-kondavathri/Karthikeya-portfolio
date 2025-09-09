"use client";

import { useEffect, useState } from "react";
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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.name}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl 
                  transition-all duration-500 h-full transform hover:-translate-y-2 hover:scale-[1.03]"
                >
                  {/* Top Gradient Banner */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center transition-all duration-500 transform group-hover:-translate-y-2">
                        <div className="text-4xl mb-2">🚀</div>
                        <div className="text-sm font-medium">{project.name}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                        <Eye className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-sm">View Project</div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4 transition-all duration-500 transform group-hover:-translate-y-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 transition-all duration-500 transform group-hover:-translate-y-1">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-1 text-muted-foreground"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      {project.link !== "#" && (
                        <Button
                          size="sm"
                          className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        disabled={project.github === "#"}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 bg-background/80 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="right-4 bg-background/80 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
