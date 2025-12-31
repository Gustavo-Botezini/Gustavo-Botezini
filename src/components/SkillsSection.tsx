import { Habilidade } from "@/data/resumeData";
import { Code2, Users } from "lucide-react";

interface SkillsSectionProps {
  hardSkills: Habilidade[];
  softSkills: Habilidade[];
}

function SkillBar({ skill, variant }: { skill: Habilidade; variant: 'hard' | 'soft' }) {
  const percentage = (skill.nivel_proficiencia / 5) * 100;
  
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.nome_habilidade}</span>
        <span className="text-xs text-muted-foreground font-mono">{skill.nivel_proficiencia}/5</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-bar-fill ${variant === 'hard' ? 'bg-skill-bar-fill' : 'bg-skill-bar-soft'}`}
          style={{ 
            width: `${percentage}%`,
            '--skill-width': `${percentage}%`
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export function SkillsSection({ hardSkills, softSkills }: SkillsSectionProps) {
  return (
    <section className="py-12 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Hard Skills */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider">
                Hard Skills
              </h2>
            </div>
            <div className="card-elevated p-6">
              <div className="space-y-4">
                {hardSkills.map((skill, index) => (
                  <div 
                    key={skill.nome_habilidade}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <SkillBar skill={skill} variant="hard" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold text-accent uppercase tracking-wider">
                Soft Skills
              </h2>
            </div>
            <div className="card-elevated p-6">
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill.nome_habilidade}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <SkillBar skill={skill} variant="soft" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
