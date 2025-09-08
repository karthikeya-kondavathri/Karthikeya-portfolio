import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Introduction to Databases - SQL',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Database',
      icon: '🗄️',
      skills: ['SQL', 'Database Design', 'Data Querying']
    },
    {
      title: 'Dynamic Web Application',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Full-Stack',
      icon: '⚡',
      skills: ['JavaScript', 'Node.js', 'Express', 'APIs']
    },
    {
      title: 'Programming Foundations with Python',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Programming',
      icon: '🐍',
      skills: ['Python', 'OOP', 'Data Structures', 'Algorithms']
    },
    {
      title: 'Responsive Website',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Frontend',
      icon: '📱',
      skills: ['HTML', 'CSS', 'Bootstrap', 'Responsive Design']
    },
    {
      title: 'Static Website',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Frontend',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'Web Fundamentals']
    },
    {
      title: 'XPM 4.0 Fundamentals',
      issuer: 'Industry Partner',
      date: '2024',
      category: 'Project Management',
      icon: '📊',
      skills: ['Project Management', 'Agile', 'Methodology']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Database': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Full-Stack': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Programming': return 'bg-green-100 text-green-800 border-green-200';
      case 'Frontend': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Project Management': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Certifications', value: '6+', icon: '🏆' },
            { label: 'Technologies', value: '8+', icon: '💻' },
            { label: 'Hours Learning', value: '100+', icon: '⏰' },
            { label: 'Projects Built', value: '3+', icon: '🚀' }
          ].map((stat, index) => (
            <Card key={stat.label} className="text-center p-6 glow-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="group glow-card hover:scale-105 transition-all duration-300 overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-2xl">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <Badge 
                      variant="outline" 
                      className={`mb-2 ${getCategoryColor(cert.category)} text-xs`}
                    >
                      {cert.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Issued by: {cert.issuer}</span>
                    <span className="text-muted-foreground">{cert.date}</span>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">Skills Gained:</div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-primary pt-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Verified Certification</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-secondary text-white">
            <Award className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              I believe in continuous improvement and staying updated with the latest technologies. 
              These certifications represent my commitment to professional growth and excellence in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Industry-Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Hands-on Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Real-world Skills</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;