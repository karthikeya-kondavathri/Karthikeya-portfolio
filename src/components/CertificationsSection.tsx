import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: string;
  icon: string;
  skills: string[];
  link?: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: 'React Js',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Frontend',
      icon: '⚛️',
      skills: ['React JS','Frontend','Web Development'],
      link: '#'
    },
    {
      title: 'Node Js',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Backend',
      icon: '🐢',
      skills: ['Node JS', 'Express JS', 'Backend Development'],
      link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/NHUEBSMIMS.png'
    },
    {
      title: 'Developer Foundations',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Project Management',
      icon: '💻',
      skills: ['Git', 'Command Line'],
      link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/CGXDAUAGAO.png'
    },
    {
      title: 'JavaScript Essentials',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Programming',
      icon: '🟩',
      skills: ['JavaScript', 'Programming', 'Web Development'],
      link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/VHHQTPILHK.png'
    },
    {
      title: 'Introduction to Databases - SQL',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Database',
      icon: '🗄️',
      skills: ['SQL', 'Database Design', 'Data Querying'],
      link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=EJAQMKHWNU'
    },
    {
      title: 'Dynamic Web Application',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Full-Stack',
      icon: '⚡',
      skills: ['JavaScript', 'Node.js', 'Express', 'APIs'],
      link: 'https://certificates.ccbp.in/academy/dynamic-web-application?id=GQMDGGREFB'
    },
    {
      title: 'Programming Foundations with Python',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Programming',
      icon: '🐍',
      skills: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
      link: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=JRFSRPUBTT'
    },
    {
      title: 'Responsive Website',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Frontend',
      icon: '📱',
      skills: ['HTML', 'CSS', 'Bootstrap', 'Flexbox', 'Responsive Design'],
      link: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=UGJGFOIKTK'
    },
    {
      title: 'Static Website',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Frontend',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'Web Fundamentals'],
      link: 'https://certificates.ccbp.in/academy/static-website?id=QEOHQRXGYC'
    },
    {
      title: 'XPM 4.0 Fundamentals',
      issuer: 'Nxtwave',
      date: '2024',
      category: 'Project Management',
      icon: '📊',
      skills: ['Creating Personal Identity', 'Integrity', 'Setting Goals & Priorities'],
      link: 'https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=DSJLYQAFMI'

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
    <section 
      id="certifications" 
      className="py-20 bg-muted/20 relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * 200 - 100}px)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
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
            <motion.span 
              className="text-gradient"
              whileHover={{ 
                rotateY: 15,
                scale: 1.05
              }}
            >
              Certifications
            </motion.span> & Achievements
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
            Continuous learning and professional development through industry-recognized certifications
          </motion.p>
        </motion.div>

        {/* 3D Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Certifications', value: '10+', icon: '🏆' },
            { label: 'Technologies', value: '9+', icon: '💻' },
            { label: 'Hours Learning', value: '100+', icon: '⏰' },
            { label: 'Projects Built', value: '5+', icon: '🚀' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
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
                scale: 1.05,
                translateZ: 20
              }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group">
                <motion.div 
                  className="text-3xl mb-2"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold text-primary mb-1"
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 3D Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
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
                className="group overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-lg text-2xl"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="outline" 
                          className={`mb-2 ${getCategoryColor(cert.category)} text-xs`}
                        >
                          {cert.category}
                        </Badge>
                      </motion.div>
                      <motion.h3 
                        className="font-semibold text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {cert.title}
                      </motion.h3>
                    </div>
                  </div>

                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="flex items-center justify-between text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-muted-foreground">Issued by: {cert.issuer}</span>
                      <span className="text-muted-foreground">{cert.date}</span>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-sm font-medium text-muted-foreground mb-2">Skills Gained:</div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0, rotateY: -90 }}
                            whileInView={{ scale: 1, rotateY: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: skillIndex * 0.1,
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
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-2 text-sm text-primary pt-2"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </motion.div>
                      {cert.link ? (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline transition-colors"
                        >
                          <span>Verified Certification</span>
                        </a>
                      ) : (
                        <span>Verified Certification</span>
                      )}
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 3D Learning Journey */}
        <motion.div 
          className="mt-16 text-center"
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
            whileHover={{
              rotateY: 5,
              scale: 1.02,
              translateZ: 20
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card className="p-8 bg-gradient-secondary text-white shadow-2xl hover:shadow-3xl transition-all duration-500">
              <motion.div
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <Award className="h-16 w-16 mx-auto mb-4" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Continuous Learning Journey
              </motion.h3>
              <motion.p 
                className="text-white/90 max-w-2xl mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                I believe in continuous improvement and staying updated with the latest technologies. 
                These certifications represent my commitment to professional growth and excellence in web development.
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {[
                  { icon: <CheckCircle className="h-4 w-4" />, text: "Industry-Recognized" },
                  { icon: <CheckCircle className="h-4 w-4" />, text: "Hands-on Projects" },
                  { icon: <CheckCircle className="h-4 w-4" />, text: "Real-world Skills" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      x: 5
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;