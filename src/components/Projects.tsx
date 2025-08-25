import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Brain, Database, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Full-stack application integrating machine learning models for predictive analytics with real-time data visualization.",
      icon: Brain,
      technologies: ["Java Spring Boot", "React", "TensorFlow", "PostgreSQL", "Docker"],
      highlights: [
        "Real-time ML predictions",
        "Interactive data visualization",
        "Microservices architecture",
        "95% prediction accuracy"
      ],
      status: "In Development"
    },
    {
      title: "Enterprise Task Management System",
      description: "Scalable task management platform with advanced workflow automation and team collaboration features.",
      icon: Database,
      technologies: ["Spring Boot", "Angular", "MySQL", "Redis", "AWS"],
      highlights: [
        "Multi-tenant architecture",
        "Advanced role-based access",
        "Automated workflow engine",
        "Real-time notifications"
      ],
      status: "Production"
    },
    {
      title: "Smart Content Recommendation Engine",
      description: "AI-driven content recommendation system with natural language processing and user behavior analysis.",
      icon: Globe,
      technologies: ["Java", "React", "Python", "OpenAI API", "MongoDB"],
      highlights: [
        "NLP content analysis",
        "Personalized recommendations",
        "A/B testing framework",
        "70% engagement increase"
      ],
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Development": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Completed": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that combine modern development practices 
            with cutting-edge AI technologies to solve real-world challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card border-border/50 p-6 hover-glow transition-smooth group">
              {/* Project Icon & Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="glow-primary rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                  <project.icon className="text-primary" size={24} />
                </div>
                <Badge className={`${getStatusColor(project.status)} border`}>
                  {project.status}
                </Badge>
              </div>

              {/* Project Title & Description */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technology Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" className="flex-1 hover-glow-accent">
                  <Github size={16} />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1 hover-glow">
                  <ExternalLink size={16} />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="gradient-card border-border/50 p-8 max-w-3xl mx-auto hover-glow transition-smooth">
            <h3 className="text-2xl font-bold mb-4 text-primary">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to work on innovative projects that leverage modern technologies 
              and AI to create meaningful solutions. Let's discuss how we can bring your ideas to life.
            </p>
            <Button variant="hero" size="lg" className="hover-glow">
              Let's Build Something Amazing
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;