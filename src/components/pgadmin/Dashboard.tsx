import { 
  Award, 
  Briefcase, 
  Code, 
  Database, 
  FileText, 
  GraduationCap,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  profissional, 
  hardSkills, 
  softSkills, 
  experiencias, 
  projetos, 
  certificacoes,
  educacao 
} from "@/data/resumeData";
import { getCertificates } from "@/data/certificates";

export function Dashboard() {
  const totalCertificados = getCertificates().length;
  const totalProjetos = projetos.length;
  const totalExperiencias = experiencias.length;
  const totalHabilidades = hardSkills.length + softSkills.length;

  // Agrupar habilidades por categoria
  const categorias = {
    "Database & SQL": hardSkills.filter(s => 
      s.nome_habilidade.includes("PostgreSQL") || 
      s.nome_habilidade.includes("SQL") || 
      s.nome_habilidade.includes("Oracle") ||
      s.nome_habilidade.includes("DML") ||
      s.nome_habilidade.includes("Modelagem") ||
      s.nome_habilidade.includes("Warehouse")
    ),
    "Programação": hardSkills.filter(s => 
      s.nome_habilidade.includes("Python") || 
      s.nome_habilidade.includes("PHP") ||
      s.nome_habilidade.includes("Node") ||
      s.nome_habilidade.includes("React") ||
      s.nome_habilidade.includes("Git")
    ),
    "Linux & DevOps": hardSkills.filter(s => 
      s.nome_habilidade.includes("Linux") || 
      s.nome_habilidade.includes("Docker") ||
      s.nome_habilidade.includes("DevOps") ||
      s.nome_habilidade.includes("Shell")
    ),
    "Segurança": hardSkills.filter(s => 
      s.nome_habilidade.includes("Cyber") || 
      s.nome_habilidade.includes("Security") ||
      s.nome_habilidade.includes("Detection")
    ),
  };

  // Calcular média de proficiência por categoria
  const mediasPorCategoria = Object.entries(categorias).map(([nome, skills]) => ({
    nome,
    media: skills.length > 0 
      ? Math.round((skills.reduce((acc, s) => acc + s.nivel_proficiencia, 0) / skills.length) * 20)
      : 0,
    total: skills.length
  }));

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-auto bg-muted/5 p-4 sm:p-6">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Dashboard - {profissional.nome}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {profissional.titulo_atual} | {profissional.email}
        </p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificados</CardTitle>
            <Award className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCertificados}</div>
            <p className="text-xs text-muted-foreground">
              Certificações obtidas
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-[1.02]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projetos</CardTitle>
            <Code className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjetos}</div>
            <p className="text-xs text-muted-foreground">
              Projetos desenvolvidos
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Experiências</CardTitle>
            <Briefcase className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalExperiencias}</div>
            <p className="text-xs text-muted-foreground">
              Experiências profissionais
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-[1.02]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Habilidades</CardTitle>
            <Zap className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHabilidades}</div>
            <p className="text-xs text-muted-foreground">
              Hard + Soft Skills
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Conteúdo Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 animate-fade-in">
        {/* Mapa de Competências Técnicas */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Mapa de Competências Técnicas
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Nível de proficiência por categoria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            {mediasPorCategoria.map((cat) => (
              <div key={cat.nome} className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-medium truncate pr-2">{cat.nome}</span>
                  <span className="text-muted-foreground whitespace-nowrap text-xs">
                    {cat.media}% • {cat.total}
                  </span>
                </div>
                <Progress value={cat.media} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Gráfico de Habilidades */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Distribuição de Habilidades
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Hard Skills vs Soft Skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-medium flex items-center gap-2">
                    <Code className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                    <span className="truncate">Hard Skills</span>
                  </span>
                  <span className="text-muted-foreground whitespace-nowrap text-xs">{hardSkills.length}</span>
                </div>
                <Progress 
                  value={(hardSkills.length / totalHabilidades) * 100} 
                  className="h-3 bg-blue-500/20"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-medium flex items-center gap-2">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                    <span className="truncate">Soft Skills</span>
                  </span>
                  <span className="text-muted-foreground whitespace-nowrap text-xs">{softSkills.length}</span>
                </div>
                <Progress 
                  value={(softSkills.length / totalHabilidades) * 100} 
                  className="h-3 bg-purple-500/20"
                />
              </div>

              {/* Top 5 Hard Skills */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Top 5 Hard Skills</h4>
                <div className="space-y-2">
                  {hardSkills
                    .sort((a, b) => b.nivel_proficiencia - a.nivel_proficiencia)
                    .slice(0, 5)
                    .map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-xs sm:text-sm gap-2">
                        <span className="truncate flex-1">{skill.nome_habilidade}</span>
                        <div className="flex gap-0.5 sm:gap-1 ml-2 shrink-0">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                                level <= skill.nivel_proficiencia
                                  ? 'bg-primary'
                                  : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline de Carreira */}
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Timeline de Carreira
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Trajetória profissional e acadêmica</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-4 sm:space-y-6">
                {/* Experiências */}
                {experiencias.map((exp, index) => (
                  <div key={index} className="relative pl-8 sm:pl-10 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="absolute left-1.5 sm:left-2.5 top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary border-2 border-background" />
                    <div className="bg-muted/50 rounded-lg p-3 sm:p-4 hover:bg-muted/80 transition-colors duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-xs sm:text-sm">{exp.cargo}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{exp.empresa}</p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded whitespace-nowrap">
                          {exp.data_inicio} - {exp.data_fim || 'Atual'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {exp.stack_utilizada.slice(0, 4).map((tech, i) => (
                          <span key={i} className="text-[10px] sm:text-xs bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Educação */}
                {educacao.map((edu, index) => (
                  <div key={index} className="relative pl-8 sm:pl-10 animate-fade-in" style={{ animationDelay: `${(experiencias.length + index) * 100}ms` }}>
                    <div className="absolute left-1.5 sm:left-2.5 top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 border-2 border-background" />
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 sm:p-4 hover:bg-green-500/20 transition-colors duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-xs sm:text-sm flex items-center gap-2">
                            <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                            {edu.curso}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{edu.instituicao}</p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded whitespace-nowrap">
                          {edu.ano_inicio} - {edu.ano_conclusao || 'Cursando'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sobre Mim */}
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Sobre Mim
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {profissional.sobre_mim}
            </p>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}
