import { useState, useEffect } from "react";
import { Table2, Columns3, Key, FileText, BarChart3, Download, Share2, Printer } from "lucide-react";
import { TableName } from "./ObjectExplorer";
import { DataGrid } from "./DataGrid";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  profissional, 
  hardSkills, 
  softSkills, 
  experiencias, 
  projetos, 
  educacao, 
  certificacoes, 
  idiomas 
} from "@/data/resumeData";

type TabType = "data" | "columns" | "constraints" | "sql" | "chart" | "export";

interface TablePanelProps {
  selectedTable: TableName | null;
}

const tableConfigs: Record<TableName, {
  columns: { name: string; type: string; nullable?: boolean; isPK?: boolean; isFK?: boolean }[];
  getData: () => Record<string, React.ReactNode>[];
}> = {
  profissional: {
    columns: [
      { name: "id_profissional", type: "SERIAL", isPK: true },
      { name: "nome", type: "VARCHAR(100)", nullable: false },
      { name: "titulo_atual", type: "nivel_senioridade" },
      { name: "email", type: "VARCHAR(150)" },
      { name: "linkedin", type: "VARCHAR(255)" },
      { name: "github", type: "VARCHAR(255)" },
      { name: "sobre_mim", type: "TEXT" },
    ],
    getData: () => [{
      id_profissional: 1,
      nome: profissional.nome,
      titulo_atual: <span className="font-mono text-accent">{profissional.titulo_atual}</span>,
      email: profissional.email,
      linkedin: profissional.linkedin,
      github: profissional.github,
      sobre_mim: <div className="max-w-md text-[11px] leading-relaxed">{profissional.sobre_mim}</div>,
    }],
  },
  habilidades: {
    columns: [
      { name: "id_habilidade", type: "SERIAL", isPK: true },
      { name: "id_profissional", type: "INT", nullable: false, isFK: true },
      { name: "categoria", type: "categoria", nullable: false },
      { name: "nome_habilidade", type: "VARCHAR(100)", nullable: false },
      { name: "nivel_proficiencia", type: "INT" },
    ],
    getData: () => {
      const allSkills = [
        ...hardSkills.map((s, i) => ({ ...s, id: i + 1 })),
        ...softSkills.map((s, i) => ({ ...s, id: hardSkills.length + i + 1 })),
      ];
      return allSkills.map((skill) => ({
        id_habilidade: skill.id,
        id_profissional: 1,
        categoria: (
          <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
            skill.categoria === 'HARD' 
              ? 'bg-primary/20 text-primary' 
              : 'bg-accent/20 text-accent'
          }`}>
            {skill.categoria}
          </span>
        ),
        nome_habilidade: skill.nome_habilidade,
        nivel_proficiencia: (
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${
                    level <= skill.nivel_proficiencia
                      ? skill.categoria === 'HARD' ? 'bg-primary' : 'bg-accent'
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              {skill.nivel_proficiencia}/5
            </span>
          </div>
        ),
      }));
    },
  },
  experiencias: {
    columns: [
      { name: "id_experiencias", type: "SERIAL", isPK: true },
      { name: "id_profissional", type: "INT", nullable: false, isFK: true },
      { name: "empresa", type: "VARCHAR(100)" },
      { name: "cargo", type: "VARCHAR(100)" },
      { name: "data_inicio", type: "DATE" },
      { name: "data_fim", type: "DATE" },
      { name: "conquistas", type: "TEXT[]" },
      { name: "stack_utilizada", type: "TEXT[]" },
    ],
    getData: () => experiencias.map((exp, i) => ({
      id_experiencias: i + 1,
      id_profissional: 1,
      empresa: <span className="font-medium">{exp.empresa}</span>,
      cargo: exp.cargo,
      data_inicio: <span className="font-mono text-[11px]">{exp.data_inicio}</span>,
      data_fim: exp.data_fim ? (
        <span className="font-mono text-[11px]">{exp.data_fim}</span>
      ) : (
        <span className="text-primary font-medium text-[11px]">CURRENT</span>
      ),
      conquistas: (
        <ul className="text-[11px] space-y-0.5 max-w-sm">
          {exp.conquistas.map((c, idx) => (
            <li key={idx} className="flex items-start gap-1">
              <span className="text-muted-foreground">•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      ),
      stack_utilizada: (
        <div className="flex flex-wrap gap-1 max-w-xs">
          {exp.stack_utilizada.map((tech) => (
            <span key={tech} className="tech-tag-grid">{tech}</span>
          ))}
        </div>
      ),
    })),
  },
  educacao: {
    columns: [
      { name: "id_educacao", type: "SERIAL", isPK: true },
      { name: "id_profissional", type: "INT", nullable: false, isFK: true },
      { name: "instituicao", type: "VARCHAR(150)" },
      { name: "curso", type: "VARCHAR(150)" },
      { name: "grau_academico", type: "VARCHAR(100)" },
      { name: "ano_inicio", type: "DATE" },
      { name: "ano_conclusao", type: "DATE" },
    ],
    getData: () => educacao.map((edu, i) => ({
      id_educacao: i + 1,
      id_profissional: 1,
      instituicao: edu.instituicao,
      curso: <span className="font-medium">{edu.curso}</span>,
      grau_academico: edu.grau_academico,
      ano_inicio: <span className="font-mono text-[11px]">{edu.ano_inicio}</span>,
      ano_conclusao: edu.ano_conclusao ? (
        <span className="font-mono text-[11px]">{edu.ano_conclusao}</span>
      ) : (
        <span className="text-primary font-medium text-[11px]">IN PROGRESS</span>
      ),
    })),
  },
  certificacoes: {
    columns: [
      { name: "id_certificacao", type: "SERIAL", isPK: true },
      { name: "id_profissional", type: "INT", nullable: false, isFK: true },
      { name: "nome_certificacao", type: "VARCHAR(200)" },
      { name: "emissor", type: "VARCHAR(100)" },
      { name: "ano_conclusao", type: "INT" },
      { name: "link_credencial", type: "VARCHAR(255)" },
    ],
    getData: () => certificacoes.map((cert, i) => ({
      id_certificacao: i + 1,
      id_profissional: 1,
      nome_certificacao: <span className="font-medium">{cert.nome_certificacao}</span>,
      emissor: cert.emissor,
      ano_conclusao: <span className="font-mono">{cert.ano_conclusao}</span>,
      link_credencial: cert.link_credencial ? (
        <a 
          href={`https://${cert.link_credencial}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-[11px]"
        >
          {cert.link_credencial}
        </a>
      ) : null,
    })),
  },
  idiomas: {
    columns: [
      { name: "id_idioma", type: "SERIAL", isPK: true },
      { name: "id_profissional", type: "INT", nullable: false, isFK: true },
      { name: "idioma", type: "VARCHAR(100)" },
      { name: "nivel_fluencia", type: "nivel_fluencia" },
    ],
    getData: () => idiomas.map((lang, i) => ({
      id_idioma: i + 1,
      id_profissional: 1,
      idioma: lang.idioma,
      nivel_fluencia: (
        <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
          lang.nivel_fluencia === 'Nativo' ? 'bg-primary/20 text-primary' :
          lang.nivel_fluencia === 'Avançado' ? 'bg-primary/15 text-primary' :
          lang.nivel_fluencia === 'Intermediário' ? 'bg-muted text-foreground' :
          'bg-muted text-muted-foreground'
        }`}>
          {lang.nivel_fluencia}
        </span>
      ),
    })),
  },
  projetos: {
    columns: [
      { name: "id_projeto", type: "SERIAL", isPK: true },
      { name: "id_profissional", type: "INT", nullable: false, isFK: true },
      { name: "nome_projeto", type: "VARCHAR(150)" },
      { name: "descricao", type: "TEXT" },
      { name: "tecnologias_utilizadas", type: "TEXT[]" },
      { name: "link_projeto", type: "VARCHAR(255)" },
    ],
    getData: () => projetos.map((proj, i) => ({
      id_projeto: i + 1,
      id_profissional: 1,
      nome_projeto: <span className="font-medium">{proj.nome_projeto}</span>,
      descricao: <div className="max-w-sm text-[11px] leading-relaxed">{proj.descricao}</div>,
      tecnologias_utilizadas: (
        <div className="flex flex-wrap gap-1 max-w-xs">
          {proj.tecnologias_utilizadas.map((tech) => (
            <span key={tech} className="tech-tag-grid">{tech}</span>
          ))}
        </div>
      ),
      link_projeto: proj.link_projeto ? (
        <a 
          href={`https://${proj.link_projeto}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-[11px]"
        >
          {proj.link_projeto}
        </a>
      ) : null,
    })),
  },
};

export function TablePanel({ selectedTable }: TablePanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>("data");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedTable) {
      setIsLoading(true);
      // Simular loading para demonstração
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedTable]);

  if (!selectedTable) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center text-muted-foreground animate-fade-in">
          <Table2 className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm">Select a table from Object Explorer</p>
          <p className="text-xs mt-1">to view its data and properties</p>
        </div>
      </div>
    );
  }

  const config = tableConfigs[selectedTable];
  const data = config.getData();

  // Funções de exportação
  const exportToCSV = () => {
    const headers = config.columns.map(col => col.name).join(',');
    const rows = data.map(row => 
      config.columns.map(col => {
        const value = row[col.name];
        if (value === null || value === undefined) return '';
        if (typeof value === 'object') return JSON.stringify(value);
        return String(value).replace(/,/g, ';');
      }).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedTable}_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportToPDF = () => {
    window.print();
  };

  const shareLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}?table=${selectedTable}`;
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copiado para área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar link:', err);
    }
  };

  const printTable = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print - ${selectedTable}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h1 { color: #333; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #f4f4f4; font-weight: bold; }
              @media print {
                button { display: none; }
              }
            </style>
          </head>
          <body>
            <h1>Tabela: ${selectedTable}</h1>
            <p>Gerado em: ${new Date().toLocaleDateString('pt-BR')}</p>
            <table>
              <thead>
                <tr>
                  ${config.columns.map(col => `<th>${col.name}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${data.map(row => `
                  <tr>
                    ${config.columns.map(col => {
                      const value = row[col.name];
                      return `<td>${value === null || value === undefined ? '[null]' : String(value)}</td>`;
                    }).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <button onclick="window.print()" style="margin-top: 20px; padding: 10px 20px; cursor: pointer;">Imprimir</button>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
    }
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "data", label: "Data Output", icon: <Table2 className="w-3.5 h-3.5" /> },
    { id: "chart", label: "Chart View", icon: <BarChart3 className="w-3.5 h-3.5" /> },
    { id: "columns", label: "Columns", icon: <Columns3 className="w-3.5 h-3.5" /> },
    { id: "constraints", label: "Constraints", icon: <Key className="w-3.5 h-3.5" /> },
    { id: "sql", label: "SQL", icon: <FileText className="w-3.5 h-3.5" /> },
    { id: "export", label: "Export", icon: <Download className="w-3.5 h-3.5" /> },
  ];

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col bg-card overflow-hidden">
        <div className="pgadmin-panel-header border-b border-sidebar-border">
          <Table2 className="w-4 h-4 text-sidebar-foreground" />
          <span className="font-semibold text-[12px] text-sidebar-foreground">{selectedTable}</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="skeleton h-8 w-full rounded"></div>
          <div className="skeleton h-48 w-full rounded"></div>
          <div className="skeleton h-8 w-3/4 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-card overflow-hidden animate-fade-in">
      {/* Panel header */}
      <div className="pgadmin-panel-header">
        <Table2 className="w-4 h-4 text-pgadmin-icon-table" />
        <span className="font-semibold text-[13px] hidden sm:inline">public.{selectedTable}</span>
        <span className="font-semibold text-[13px] sm:hidden">{selectedTable}</span>
        <span className="text-muted-foreground text-[11px] hidden md:inline">— Table</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border bg-pgadmin-header-bg overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pgadmin-tab flex items-center gap-1.5 whitespace-nowrap ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {activeTab === "data" && (
          <DataGrid 
            tableName={selectedTable}
            columns={config.columns}
            rows={data}
          />
        )}
        
        {activeTab === "chart" && (
          <div className="p-4 sm:p-6 overflow-auto h-full bg-muted/5">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Visualização de Dados - {selectedTable}
              </h3>
              <p className="text-sm text-muted-foreground">
                Análise visual dos dados da tabela
              </p>
            </div>

            {selectedTable === "habilidades" && (
              <div className="space-y-6">
                <div className="bg-card p-4 rounded-lg border">
                  <h4 className="text-sm font-semibold mb-4">Distribuição por Categoria</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Hard Skills', value: hardSkills.length, color: 'bg-blue-500' },
                      { name: 'Soft Skills', value: softSkills.length, color: 'bg-purple-500' }
                    ].map((item) => (
                      <div key={item.name}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>{item.name}</span>
                          <span className="font-mono text-xs text-muted-foreground">{item.value}</span>
                        </div>
                        <div className="w-full h-8 bg-muted rounded overflow-hidden">
                          <div 
                            className={`h-full ${item.color} flex items-center justify-center text-white text-xs font-semibold transition-all duration-500`}
                            style={{ width: `${(item.value / (hardSkills.length + softSkills.length)) * 100}%` }}
                          >
                            {Math.round((item.value / (hardSkills.length + softSkills.length)) * 100)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card p-4 rounded-lg border">
                  <h4 className="text-sm font-semibold mb-4">Top 10 Habilidades por Proficiência</h4>
                  <div className="space-y-2">
                    {[...hardSkills, ...softSkills]
                      .sort((a, b) => b.nivel_proficiencia - a.nivel_proficiencia)
                      .slice(0, 10)
                      .map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="text-xs font-mono text-muted-foreground w-8">{idx + 1}.</span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="truncate">{skill.nome_habilidade}</span>
                              <span className="font-mono text-muted-foreground ml-2">{skill.nivel_proficiencia}/5</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                                style={{ width: `${(skill.nivel_proficiencia / 5) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTable === "experiencias" && (
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="text-sm font-semibold mb-4">Timeline de Experiências</h4>
                <div className="space-y-4">
                  {experiencias.map((exp, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                      <div className="font-semibold text-sm">{exp.cargo}</div>
                      <div className="text-xs text-muted-foreground">{exp.empresa}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {exp.data_inicio} - {exp.data_fim || 'Atual'}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {exp.stack_utilizada.map((tech, i) => (
                          <span key={i} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTable === "projetos" && (
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="text-sm font-semibold mb-4">Projetos</h4>
                <div className="grid gap-4">
                  {projetos.map((proj, idx) => (
                    <div key={idx} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="font-semibold text-sm">{proj.nome_projeto}</div>
                      <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{proj.descricao}</div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {proj.tecnologias.map((tech, i) => (
                          <span key={i} className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!["habilidades", "experiencias", "projetos"].includes(selectedTable) && (
              <div className="flex items-center justify-center h-64 bg-card rounded-lg border">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Visualização de gráfico não disponível para esta tabela</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "export" && (
          <div className="p-4 sm:p-6 overflow-auto h-full bg-muted/5">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                Exportar e Compartilhar - {selectedTable}
              </h3>
              <p className="text-sm text-muted-foreground">
                {data.length} registro(s) disponível(is) para exportação
              </p>
            </div>

            <div className="grid gap-4 max-w-2xl">
              {/* Export CSV */}
              <div className="bg-card p-4 rounded-lg border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Download className="w-4 h-4 text-green-500" />
                      <h4 className="font-semibold text-sm">Exportar para CSV</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Baixe os dados em formato CSV para uso em Excel ou outras ferramentas
                    </p>
                    <Button onClick={exportToCSV} size="sm" variant="outline" className="gap-2">
                      <Download className="w-3 h-3" />
                      Baixar CSV
                    </Button>
                  </div>
                </div>
              </div>

              {/* Export PDF */}
              <div className="bg-card p-4 rounded-lg border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-red-500" />
                      <h4 className="font-semibold text-sm">Exportar para PDF</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Gere um documento PDF formatado com os dados da tabela
                    </p>
                    <Button onClick={exportToPDF} size="sm" variant="outline" className="gap-2">
                      <FileText className="w-3 h-3" />
                      Gerar PDF
                    </Button>
                  </div>
                </div>
              </div>

              {/* Share Link */}
              <div className="bg-card p-4 rounded-lg border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Share2 className="w-4 h-4 text-blue-500" />
                      <h4 className="font-semibold text-sm">Compartilhar via Link</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Copie um link direto para compartilhar esta visualização
                    </p>
                    <Button onClick={shareLink} size="sm" variant="outline" className="gap-2">
                      <Share2 className="w-3 h-3" />
                      Copiar Link
                    </Button>
                  </div>
                </div>
              </div>

              {/* Print */}
              <div className="bg-card p-4 rounded-lg border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Printer className="w-4 h-4 text-purple-500" />
                      <h4 className="font-semibold text-sm">Imprimir Formatado</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Abra uma janela de impressão com layout formatado e otimizado
                    </p>
                    <Button onClick={printTable} size="sm" variant="outline" className="gap-2">
                      <Printer className="w-3 h-3" />
                      Imprimir
                    </Button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="bg-muted/50 p-4 rounded-lg border border-dashed">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong>Dica:</strong> Para exportar múltiplas tabelas, acesse cada tabela individualmente e exporte separadamente.</p>
                  <p><strong>Formato CSV:</strong> Compatível com Excel, Google Sheets e outras ferramentas de análise.</p>
                  <p><strong>Link Compartilhado:</strong> O link será copiado para sua área de transferência automaticamente.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "columns" && (
          <div className="p-4 overflow-auto h-full">
            <table className="pgadmin-grid">
              <thead>
                <tr>
                  <th className="font-mono">column_name</th>
                  <th className="font-mono">data_type</th>
                  <th className="font-mono">nullable</th>
                  <th className="font-mono">constraints</th>
                </tr>
              </thead>
              <tbody>
                {config.columns.map((col) => (
                  <tr key={col.name}>
                    <td className="font-mono font-medium">{col.name}</td>
                    <td className="font-mono text-muted-foreground">{col.type}</td>
                    <td>
                      {col.nullable === false ? (
                        <span className="text-destructive font-mono">NO</span>
                      ) : (
                        <span className="text-muted-foreground font-mono">YES</span>
                      )}
                    </td>
                    <td>
                      <div className="flex gap-1">
                        {col.isPK && <span className="constraint-pk">PK</span>}
                        {col.isFK && <span className="constraint-fk">FK</span>}
                        {!col.nullable && <span className="constraint-nn">NOT NULL</span>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "constraints" && (
          <div className="p-4 overflow-auto h-full">
            <table className="pgadmin-grid">
              <thead>
                <tr>
                  <th className="font-mono">constraint_name</th>
                  <th className="font-mono">constraint_type</th>
                  <th className="font-mono">column_name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono">pk_{selectedTable}</td>
                  <td><span className="constraint-pk">PRIMARY KEY</span></td>
                  <td className="font-mono text-muted-foreground">
                    {config.columns.find(c => c.isPK)?.name || 'id'}
                  </td>
                </tr>
                {config.columns.some(c => c.isFK) && (
                  <tr>
                    <td className="font-mono">fk_profissional_{selectedTable}</td>
                    <td><span className="constraint-fk">FOREIGN KEY</span></td>
                    <td className="font-mono text-muted-foreground">id_profissional</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "sql" && (
          <div className="p-4 font-mono text-[12px] bg-muted/30 h-full overflow-auto">
            <pre className="whitespace-pre-wrap text-foreground">
{`SELECT * FROM public.${selectedTable}
ORDER BY ${config.columns[0]?.name || 'id'} ASC;

-- ${data.length} row(s) returned
-- Query executed in 0.${Math.floor(Math.random() * 90) + 10}ms`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
