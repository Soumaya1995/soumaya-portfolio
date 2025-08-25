import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore opportunities? 
            I'd love to hear about your ideas and how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="gradient-card border-border/50 p-6 hover-glow transition-smooth">
              <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="glow-primary rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="glow-primary rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="glow-primary rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Available for Remote Work</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground mb-4">Connect on Social</p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="glow-primary rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition-smooth hover-glow"
                  >
                    <Github className="text-primary" size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="glow-primary rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition-smooth hover-glow"
                  >
                    <Linkedin className="text-primary" size={18} />
                  </a>
                </div>
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="gradient-card border-border/50 p-6 hover-glow transition-smooth">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <h4 className="font-semibold text-foreground">Available for New Opportunities</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently open to full-time positions, freelance projects, and exciting collaborations 
                in software development, particularly those involving AI integration and modern web technologies.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card border-border/50 p-8 hover-glow transition-smooth">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Subject</label>
                <Input 
                  placeholder="Project discussion, job opportunity, etc."
                  className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, requirements, or just say hello..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary/50 transition-smooth resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full hover-glow">
                <Send size={18} />
                Send Message
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground text-center">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;