import { Mail, Linkedin, Github, Database } from "lucide-react";
import { Professional } from "@/data/resumeData";

interface HeroSectionProps {
  data: Professional;
}

const senioridadeLabel = {
  Junior: "Junior",
  Pleno: "Pleno",
  Senior: "Senior"
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <header className="bg-hero-gradient text-primary-foreground py-16 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 animate-fade-in">
              {data.nome}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
              DBA {senioridadeLabel[data.titulo_atual as keyof typeof senioridadeLabel]} | PostgreSQL
            </p>
          </div>
        </div>
        
        <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {data.sobre_mim}
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a 
            href={`mailto:${data.email}`} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            {data.email}
          </a>
          <a 
            href={`https://${data.linkedin}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-sm font-medium"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a 
            href={`https://${data.github}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
