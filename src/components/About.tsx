import { Card } from "@/components/ui/card";
import { Brain, Code2, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "5+ years building robust applications with Java Spring Boot backends and modern React/Angular frontends"
    },
    {
      icon: Brain,
      title: "AI Enthusiast", 
      description: "Passionate about integrating machine learning and AI capabilities into web applications"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing applications for speed, scalability, and exceptional user experience"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong experience in agile development and cross-functional team environments"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software engineer who loves creating elegant solutions to complex problems. 
            With expertise in modern frameworks and a deep interest in AI, I build applications that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="gradient-card border-border/50 p-6 hover-glow transition-smooth">
              <div className="glow-primary rounded-full w-16 h-16 flex items-center justify-center mb-4 bg-primary/10">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-border/50 p-8 hover-glow transition-smooth">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the past 5 years, I've evolved from a curious developer into a seasoned software engineer 
                with expertise across the full technology stack. My journey began with Java and has expanded 
                to include modern frameworks like Spring Boot, React, and Angular.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What truly excites me is the intersection of traditional software development and artificial intelligence. 
                I've been exploring how AI can enhance user experiences and automate complex business processes, 
                integrating machine learning models into production applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and am always eager to learn new technologies 
                that can solve problems more effectively. Whether it's optimizing backend performance or 
                creating intuitive user interfaces, I approach every project with enthusiasm and attention to detail.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;