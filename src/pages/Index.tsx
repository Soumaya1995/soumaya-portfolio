import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-background/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Software Engineer Portfolio. Built with React, TypeScript & passion for AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
