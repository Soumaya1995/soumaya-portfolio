import { Card } from "@/components/ui/card";

const TechStack = () => {
  const techCategories = [
    {
      category: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Spring Security", level: 85 },
        { name: "Hibernate/JPA", level: 88 },
        { name: "RESTful APIs", level: 92 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      category: "Frontend", 
      icon: "🎨",
      technologies: [
        { name: "React", level: 88 },
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: "AI & Data",
      icon: "🤖", 
      technologies: [
        { name: "Machine Learning", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Python", level: 80 },
        { name: "OpenAI API", level: 85 },
        { name: "Data Analysis", level: 75 },
        { name: "AI Integration", level: 80 }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      technologies: [
        { name: "Docker", level: 82 },
        { name: "Git", level: 95 },
        { name: "AWS", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "Maven/Gradle", level: 88 },
        { name: "PostgreSQL", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built over 5+ years of professional development, 
            with deep expertise in modern frameworks and emerging AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="gradient-card border-border/50 p-6 hover-glow transition-smooth">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="gradient-primary rounded-full h-2 transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${tech.level}%`,
                          animation: `slideIn 1s ease-out ${techIndex * 0.1}s both`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Years of Experience Highlight */}
        <div className="text-center mt-16">
          <Card className="gradient-card border-border/50 p-8 max-w-2xl mx-auto hover-glow transition-smooth">
            <div className="text-6xl font-bold gradient-primary bg-clip-text text-transparent mb-4">5+</div>
            <p className="text-xl font-semibold text-foreground mb-2">Years of Experience</p>
            <p className="text-muted-foreground">
              Continuously learning and adapting to new technologies, 
              with a passion for building scalable, maintainable solutions.
            </p>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;