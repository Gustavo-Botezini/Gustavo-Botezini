import { FolderGit2, ExternalLink } from "lucide-react";
import { Projeto } from "@/data/resumeData";

interface ProjectsSectionProps {
  data: Projeto[];
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section className="py-12 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <FolderGit2 className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-primary uppercase tracking-wider">
            Projetos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((projeto, index) => (
            <article 
              key={projeto.nome_projeto}
              className="card-elevated p-5 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-semibold text-foreground leading-tight">
                  {projeto.nome_projeto}
                </h3>
                {projeto.link_projeto && (
                  <a 
                    href={`https://${projeto.link_projeto}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-icon flex-shrink-0"
                    aria-label="Ver projeto"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {projeto.descricao}
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-divider">
                {projeto.tecnologias_utilizadas.map((tech) => (
                  <span key={tech} className="tech-tag text-[11px]">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
