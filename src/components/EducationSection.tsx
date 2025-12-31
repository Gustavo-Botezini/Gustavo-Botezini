import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Educacao, Certificacao } from "@/data/resumeData";

interface EducationSectionProps {
  educacao: Educacao[];
  certificacoes: Certificacao[];
}

export function EducationSection({ educacao, certificacoes }: EducationSectionProps) {
  return (
    <section className="py-12 px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Formação Acadêmica */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider">
                Formação
              </h2>
            </div>

            <div className="space-y-4">
              {educacao.map((edu, index) => (
                <div 
                  key={`${edu.instituicao}-${edu.curso}`}
                  className="relative pl-5 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="timeline-dot absolute left-0 top-1.5" />
                  {index < educacao.length - 1 && <div className="timeline-line" />}
                  
                  <div className="pb-4">
                    <h3 className="font-semibold text-foreground text-sm">{edu.curso}</h3>
                    <p className="text-muted-foreground text-sm">{edu.instituicao}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      {edu.grau_academico} • {edu.ano_inicio} — {edu.ano_conclusao || "Em andamento"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold text-accent uppercase tracking-wider">
                Certificações
              </h2>
            </div>

            <div className="space-y-3">
              {certificacoes.map((cert, index) => (
                <div 
                  key={cert.nome_certificacao}
                  className="card-elevated p-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-foreground text-sm">{cert.nome_certificacao}</h3>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {cert.emissor} • {cert.ano_conclusao}
                      </p>
                    </div>
                    {cert.link_credencial && (
                      <a 
                        href={`https://${cert.link_credencial}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon flex-shrink-0"
                        aria-label="Ver credencial"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
