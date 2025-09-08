import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Todos Application',
      description: 'A comprehensive todo management app with persistent storage, featuring full CRUD operations, priority levels, and category organization using vanilla JavaScript and LocalStorage.',
      link: 'https://kktodolist.ccbp.tech/',
      github: '#',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'LocalStorage'],
      image: '/placeholder.svg',
      gradient: 'from-blue-500 to-purple-600',
      features: ['CRUD Operations', 'Persistent Storage', 'Responsive Design', 'Interactive UI']
    },
    {
      name: 'Food Munch',
      description: 'A modern, responsive website for a food delivery service featuring dynamic menus, promotional offers, video content, and seamless user experience across all devices.',
      link: 'https://foodmunchkkk.ccbp.tech/',
      github: '#',
      tech: ['HTML', 'CSS', 'Bootstrap', 'Responsive Design'],
      image: '/placeholder.svg',
      gradient: 'from-green-500 to-teal-600',
      features: ['Responsive Layout', 'Video Integration', 'Modern Design', 'Cross-browser Compatible']
    },
    {
      name: 'Data Analyst Dashboard',
      description: 'An interactive Power BI dashboard for Karthikeya Real Mart showcasing comprehensive business analytics, KPIs, sales trends, and actionable insights for data-driven decision making.',
      link: '#',
      github: '#',
      tech: ['Power BI', 'Excel', 'Data Analysis', 'Kaggle'],
      image: '/placeholder.svg',
      gradient: 'from-orange-500 to-red-600',
      features: ['Interactive Charts', 'KPI Tracking', 'Data Visualization', 'Business Intelligence']
    },
    {
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Features include admin panel, inventory management, and order tracking.',
      link: '#',
      github: '#',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      image: '/placeholder.svg',
      gradient: 'from-purple-500 to-pink-600',
      features: ['User Authentication', 'Payment Gateway', 'Admin Panel', 'Order Management']
    },
    {
      name: 'Weather Forecast App',
      description: 'A responsive weather application providing real-time weather data, 7-day forecasts, and location-based services. Includes weather maps, alerts, and personalized weather recommendations.',
      link: '#',
      github: '#',
      tech: ['React', 'TypeScript', 'Weather API', 'Tailwind CSS', 'PWA'],
      image: '/placeholder.svg',
      gradient: 'from-cyan-500 to-blue-600',
      features: ['Real-time Data', 'Location Services', 'Weather Maps', 'PWA Support']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="group card-3d glow-card overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 fade-in h-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Project Image with Gradient Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">🚀</div>
                          <div className="text-sm font-medium">{project.name}</div>
                        </div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Eye className="h-8 w-8 mx-auto mb-2" />
                          <div className="text-sm">View Project</div>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          {project.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-1 text-muted-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        {project.link !== '#' && (
                          <Button 
                            size="sm" 
                            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            onClick={() => window.open(project.link, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          disabled={project.github === '#'}
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="p-8 bg-gradient-primary rounded-2xl text-white fade-in">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-foreground hover:bg-white hover:text-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;