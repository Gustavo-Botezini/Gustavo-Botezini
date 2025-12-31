import { Briefcase, Calendar } from "lucide-react";
import { Experiencia } from "@/data/resumeData";

interface ExperienceSectionProps {
  data: Experiencia[];
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Atual";
  const [year, month] = dateStr.split("-");
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="py-12 px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-primary uppercase tracking-wider">
            Experiência Profissional
          </h2>
        </div>

        <div className="space-y-6">
          {data.map((exp, index) => (
            <article 
              key={`${exp.empresa}-${exp.data_inicio}`}
              className="card-elevated p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.cargo}</h3>
                  <p className="text-muted-foreground font-medium">{exp.empresa}</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(exp.data_inicio)} — {formatDate(exp.data_fim)}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.conquistas.map((conquista, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {conquista}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-divider">
                {exp.stack_utilizada.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
