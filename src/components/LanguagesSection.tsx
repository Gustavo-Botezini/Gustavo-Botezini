import { Languages } from "lucide-react";
import { Idioma } from "@/data/resumeData";

interface LanguagesSectionProps {
  data: Idioma[];
}

const fluencyColors = {
  'Nativo': 'bg-primary text-primary-foreground',
  'Avançado': 'bg-primary/80 text-primary-foreground',
  'Intermediário': 'bg-primary/50 text-primary-foreground',
  'Básico': 'bg-muted text-muted-foreground'
};

export function LanguagesSection({ data }: LanguagesSectionProps) {
  return (
    <section className="py-12 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Languages className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-primary uppercase tracking-wider">
            Idiomas
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {data.map((idioma, index) => (
            <div 
              key={idioma.idioma}
              className="card-elevated px-4 py-3 inline-flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-medium text-foreground">{idioma.idioma}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${fluencyColors[idioma.nivel_fluencia]}`}>
                {idioma.nivel_fluencia}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
