import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Download, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
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
      href: '#',
      bg: 'hover:bg-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      bg: 'hover:bg-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      bg: 'hover:bg-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px), 
                           radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-2 rounded-lg bg-primary/10 ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="glow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Resume</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download my complete resume to learn more about my experience and skills.
                </p>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-center">Follow Me</h3>
                <div className="flex justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-muted hover:text-white transition-all duration-300 ${social.bg} fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      className="focus:ring-primary focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    ) : (
                      <Send className="h-4 w-4 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-secondary rounded-2xl text-white fade-in">
            <h3 className="text-xl font-bold mb-2">Ready to start your project?</h3>
            <p className="text-white/90">
              Let's turn your ideas into reality. I'm just one message away!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;