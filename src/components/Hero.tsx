import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Code, Brain, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Software Engineer", "Full-Stack Developer", "AI Enthusiast", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5"></div>
      
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-pulse-subtle">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>

            {/* Main Heading with Typing Effect */}
            <div className="space-y-4 animate-text-reveal">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-foreground">Hello, I'm a</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                  {roles[currentRole]}
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="space-y-4 animate-text-reveal" style={{ animationDelay: "0.2s" }}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Crafting scalable solutions with <span className="text-primary font-semibold">5+ years</span> of expertise in modern technologies
              </p>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3">
                {["Java Spring Boot", "React", "Angular", "AI/ML"].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-full bg-card/50 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-foreground/70 leading-relaxed">
                <Brain className="inline w-5 h-5 mr-2 text-accent" />
                Passionate about AI integration and building intelligent applications that transform ideas into reality
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-text-reveal" style={{ animationDelay: "0.4s" }}>
              <Button 
                variant="default" 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-accent hover:shadow-tech hover:scale-105 transition-all duration-300"
              >
                <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-primary/30 hover:border-primary hover:bg-primary/5 hover:shadow-tech transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 animate-text-reveal" style={{ animationDelay: "0.6s" }}>
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" }
              ].map(({ icon: Icon, label }) => (
                <a 
                  key={label}
                  href="#" 
                  className="group flex items-center justify-center w-12 h-12 rounded-xl bg-card/30 border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="relative lg:block hidden">
            {/* Floating Cards */}
            <div className="space-y-6 animate-float">
              {/* Experience Card */}
              <div className="ml-auto w-64 p-6 rounded-2xl bg-card/30 border border-primary/20 backdrop-blur-sm hover:bg-card/40 transition-all duration-300 hover:scale-105 shadow-tech">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">Experience</span>
                </div>
                <p className="text-2xl font-bold text-primary">5+ Years</p>
                <p className="text-sm text-muted-foreground">Building scalable applications</p>
              </div>

              {/* Projects Card */}
              <div className="w-64 p-6 rounded-2xl bg-card/30 border border-accent/20 backdrop-blur-sm hover:bg-card/40 transition-all duration-300 hover:scale-105 shadow-tech" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Code className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-semibold text-foreground">Projects</span>
                </div>
                <p className="text-2xl font-bold text-accent">15+</p>
                <p className="text-sm text-muted-foreground">Successful deployments</p>
              </div>

              {/* AI Integration Card */}
              <div className="ml-auto w-64 p-6 rounded-2xl bg-card/30 border border-primary/20 backdrop-blur-sm hover:bg-card/40 transition-all duration-300 hover:scale-105 shadow-tech" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">AI Focus</span>
                </div>
                <p className="text-2xl font-bold text-primary">Latest</p>
                <p className="text-sm text-muted-foreground">Technology integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-large ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Small particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-small ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}

        {/* Geometric shapes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute w-4 h-4 border border-primary/10 rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `rotate-float ${10 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;