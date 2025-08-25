import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden gradient-hero flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Animated Introduction */}
          <div className="animate-text-reveal">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Software
              <br />
              Engineer
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl">
              Full-stack developer with 5+ years crafting scalable solutions with
              <span className="text-primary font-semibold"> Java Spring Boot</span>,
              <span className="text-accent font-semibold"> React</span>, and
              <span className="text-primary font-semibold"> Angular</span>
            </p>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
              🤖 Passionate about AI integration and building intelligent applications that solve real-world problems
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-text-reveal" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="hover-glow">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="hover-glow-accent">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 animate-text-reveal" style={{ animationDelay: "0.5s" }}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2 rounded-full">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2 rounded-full">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2 rounded-full">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary" size={32} />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;