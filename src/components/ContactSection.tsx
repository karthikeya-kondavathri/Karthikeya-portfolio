import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Download, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // 🔥 Custom handleSubmit using fetch (no redirect)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      await fetch("https://formsubmit.co/karthikkondavatri@gmail.com", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      form.reset(); // clears form after success
    } catch (error) {
      toast({
        title: "Oops! Something went wrong ❌",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karthikkondavatri@gmail.com',
      href: 'mailto:karthikkondavatri@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7036739622',
      href: 'tel:+917036739622',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra',
      href: 'https://maps.google.com/?q=Pune,Maharashtra',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/karthikeya-kondavathri',
      bg: 'hover:bg-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/karthikeya-kondavathri',
      bg: 'hover:bg-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/Karthikeya_K_',
      bg: 'hover:bg-blue-400'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 bg-background relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* 3D Title */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
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
            Let's <motion.span 
              className="text-gradient"
              whileHover={{ 
                rotateY: 15,
                scale: 1.05
              }}
            >
              Connect
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateX: 2,
              scale: 1.01
            }}
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* 3D Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
                rotateY: -90
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                rotateY: 5,
                scale: 1.02,
                translateZ: 20
              }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30">
                <CardHeader>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CardTitle className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Mail className="h-5 w-5 text-primary" />
                      </motion.div>
                      Get In Touch
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 5,
                        scale: 1.02
                      }}
                    >
                      <motion.div 
                        className={`p-2 rounded-lg bg-primary/10 ${info.color} transition-transform`}
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon className="h-4 w-4" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{info.label}</div>
                        <div className="font-medium text-foreground break-words">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* 3D Resume Download */}
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
                rotateY: -90
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                rotateY: 5,
                scale: 1.02,
                translateZ: 20
              }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Download className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="font-semibold mb-2"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Resume
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    Download my complete resume to learn more about my experience and skills.
                  </motion.p>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild className="w-full transition-transform">
                      <a href="/Karthikeya-resume.pdf" download>
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring" }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                        </motion.div>
                        Download PDF
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 3D Social Links */}
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
                rotateY: -90
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                rotateY: 5,
                scale: 1.02,
                translateZ: 20
              }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <motion.h3 
                    className="font-semibold mb-4 text-center"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Follow Me
                  </motion.h3>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-muted transition-all ${social.bg}`}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 10,
                          translateZ: 5
                        }}
                        whileTap={{ scale: 0.9 }}
                        viewport={{ once: true }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* 3D Contact Form */}
          <motion.div 
            className="lg:col-span-2"
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
            whileHover={{
              rotateY: -2,
              scale: 1.01,
              translateZ: 20
            }}
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card className="transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30">
              <CardHeader>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Your full name" 
                        className="focus:ring-2 focus:ring-primary transition-all duration-300 hover:shadow-lg" 
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="your.email@example.com" 
                        className="focus:ring-2 focus:ring-primary transition-all duration-300 hover:shadow-lg" 
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      required 
                      placeholder="What's this about?" 
                      className="focus:ring-2 focus:ring-primary transition-all duration-300 hover:shadow-lg" 
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Tell me about your project or just say hello..." 
                      rows={6} 
                      className="resize-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:shadow-lg" 
                    />
                  </motion.div>

                  {/* Hidden Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full transition-all duration-300 hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div 
                          className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring" }}
                        >
                          <Send className="h-4 w-4 mr-2" />
                        </motion.div>
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 3D Call to Action */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
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
            className="inline-block p-6 sm:p-8 bg-gradient-secondary rounded-2xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500"
            whileHover={{
              rotateY: 5,
              scale: 1.05,
              translateZ: 20
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h3 
              className="text-lg sm:text-xl font-bold mb-2"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ready to start your project?
            </motion.h3>
            <motion.p 
              className="text-white/90"
              whileHover={{ scale: 1.02 }}
            >
              Let's turn your ideas into reality. I'm just one message away!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
