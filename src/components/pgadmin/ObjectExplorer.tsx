import { useState } from "react";
import { 
  ChevronRight, 
  ChevronDown, 
  Database, 
  Folder, 
  FolderOpen,
  Table2,
  User,
  Wrench,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  FolderGit2,
  Server,
  Key,
  Lock,
  Hash,
  Zap,
  Eye,
  Code,
  FileCode,
  GitBranch,
  Filter,
  Shield,
  Clock,
  Settings,
  Box,
  Columns3,
  Link,
  CheckSquare,
  FileText
} from "lucide-react";
import { getCertificates, type Certificate } from "@/data/certificates";

export type TableName = 
  | "profissional" 
  | "habilidades" 
  | "experiencias" 
  | "educacao" 
  | "certificacoes" 
  | "idiomas" 
  | "projetos";

interface TreeNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  children?: TreeNode[];
  tableName?: TableName;
  certificatePath?: string;
}

interface ObjectExplorerProps {
  selectedTable: TableName | null;
  onSelectTable: (table: TableName) => void;
  selectedCertificate: string | null;
  onSelectCertificate: (path: string) => void;
}

const treeData: TreeNode[] = [
  {
    id: "servers",
    label: "Servers",
    icon: <Server className="tree-icon text-pgadmin-icon-server" />,
    children: [
      {
        id: "postgres-local",
        label: "PostgreSQL 15",
        icon: <Server className="tree-icon text-blue-500" />,
        children: [
          {
            id: "databases",
            label: "Databases (1)",
            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
            children: [
              {
                id: "db-curriculo",
                label: "curriculo",
                icon: <Database className="tree-icon text-pgadmin-icon-db" />,
                children: [
                  {
                    id: "schemas",
                    label: "Schemas (1)",
                    icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                    children: [
                      {
                        id: "public",
                        label: "public",
                        icon: <Folder className="tree-icon text-pgadmin-icon-schema" />,
                        children: [
                          // TABLES
                          {
                            id: "tables",
                            label: "Tables (7)",
                            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                            children: [
                              {
                                id: "profissional",
                                label: "profissional",
                                tableName: "profissional",
                                icon: <Table2 className="tree-icon text-pgadmin-icon-table" />,
                                children: [
                                  {
                                    id: "profissional-columns",
                                    label: "Columns (9)",
                                    icon: <Folder className="tree-icon text-purple-400" />,
                                    children: [
                                      { id: "prof-col-id", label: "id (integer)", icon: <Key className="tree-icon text-yellow-500" /> },
                                      { id: "prof-col-nome", label: "nome (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "prof-col-titulo", label: "titulo (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "prof-col-email", label: "email (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "prof-col-telefone", label: "telefone (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "prof-col-linkedin", label: "linkedin (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "prof-col-github", label: "github (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "prof-col-resumo", label: "resumo (text)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "prof-col-foto", label: "foto_url (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                    ]
                                  },
                                  {
                                    id: "profissional-constraints",
                                    label: "Constraints (1)",
                                    icon: <Folder className="tree-icon text-orange-400" />,
                                    children: [
                                      { id: "prof-pk", label: "profissional_pkey (PRIMARY KEY)", icon: <Key className="tree-icon text-yellow-500" /> },
                                    ]
                                  },
                                  {
                                    id: "profissional-indexes",
                                    label: "Indexes (1)",
                                    icon: <Folder className="tree-icon text-green-400" />,
                                    children: [
                                      { id: "prof-idx", label: "profissional_pkey", icon: <Hash className="tree-icon text-green-500" /> },
                                    ]
                                  },
                                  {
                                    id: "profissional-triggers",
                                    label: "Triggers (0)",
                                    icon: <Folder className="tree-icon text-pink-400" />,
                                  },
                                ]
                              },
                              {
                                id: "habilidades",
                                label: "habilidades",
                                tableName: "habilidades",
                                icon: <Table2 className="tree-icon text-pgadmin-icon-table" />,
                                children: [
                                  {
                                    id: "habilidades-columns",
                                    label: "Columns (4)",
                                    icon: <Folder className="tree-icon text-purple-400" />,
                                    children: [
                                      { id: "hab-col-id", label: "id (integer)", icon: <Key className="tree-icon text-yellow-500" /> },
                                      { id: "hab-col-nome", label: "nome (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "hab-col-nivel", label: "nivel (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "hab-col-categoria", label: "categoria (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                    ]
                                  },
                                  {
                                    id: "habilidades-constraints",
                                    label: "Constraints (1)",
                                    icon: <Folder className="tree-icon text-orange-400" />,
                                    children: [
                                      { id: "hab-pk", label: "habilidades_pkey (PRIMARY KEY)", icon: <Key className="tree-icon text-yellow-500" /> },
                                    ]
                                  },
                                  {
                                    id: "habilidades-indexes",
                                    label: "Indexes (1)",
                                    icon: <Folder className="tree-icon text-green-400" />,
                                  },
                                  {
                                    id: "habilidades-triggers",
                                    label: "Triggers (0)",
                                    icon: <Folder className="tree-icon text-pink-400" />,
                                  },
                                ]
                              },
                              {
                                id: "experiencias",
                                label: "experiencias",
                                tableName: "experiencias",
                                icon: <Table2 className="tree-icon text-pgadmin-icon-table" />,
                                children: [
                                  {
                                    id: "experiencias-columns",
                                    label: "Columns (7)",
                                    icon: <Folder className="tree-icon text-purple-400" />,
                                    children: [
                                      { id: "exp-col-id", label: "id (integer)", icon: <Key className="tree-icon text-yellow-500" /> },
                                      { id: "exp-col-empresa", label: "empresa (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "exp-col-cargo", label: "cargo (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "exp-col-inicio", label: "data_inicio (date)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "exp-col-fim", label: "data_fim (date)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "exp-col-desc", label: "descricao (text)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "exp-col-atual", label: "atual (boolean)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                    ]
                                  },
                                  {
                                    id: "experiencias-constraints",
                                    label: "Constraints (1)",
                                    icon: <Folder className="tree-icon text-orange-400" />,
                                    children: [
                                      { id: "exp-pk", label: "experiencias_pkey (PRIMARY KEY)", icon: <Key className="tree-icon text-yellow-500" /> },
                                    ]
                                  },
                                  {
                                    id: "experiencias-indexes",
                                    label: "Indexes (1)",
                                    icon: <Folder className="tree-icon text-green-400" />,
                                  },
                                  {
                                    id: "experiencias-triggers",
                                    label: "Triggers (0)",
                                    icon: <Folder className="tree-icon text-pink-400" />,
                                  },
                                ]
                              },
                              {
                                id: "educacao",
                                label: "educacao",
                                tableName: "educacao",
                                icon: <Table2 className="tree-icon text-pgadmin-icon-table" />,
                                children: [
                                  {
                                    id: "educacao-columns",
                                    label: "Columns (6)",
                                    icon: <Folder className="tree-icon text-purple-400" />,
                                    children: [
                                      { id: "edu-col-id", label: "id (integer)", icon: <Key className="tree-icon text-yellow-500" /> },
                                      { id: "edu-col-inst", label: "instituicao (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "edu-col-curso", label: "curso (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "edu-col-grau", label: "grau (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "edu-col-inicio", label: "data_inicio (date)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "edu-col-fim", label: "data_fim (date)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                    ]
                                  },
                                  {
                                    id: "educacao-constraints",
                                    label: "Constraints (1)",
                                    icon: <Folder className="tree-icon text-orange-400" />,
                                    children: [
                                      { id: "edu-pk", label: "educacao_pkey (PRIMARY KEY)", icon: <Key className="tree-icon text-yellow-500" /> },
                                    ]
                                  },
                                  {
                                    id: "educacao-indexes",
                                    label: "Indexes (1)",
                                    icon: <Folder className="tree-icon text-green-400" />,
                                  },
                                  {
                                    id: "educacao-triggers",
                                    label: "Triggers (0)",
                                    icon: <Folder className="tree-icon text-pink-400" />,
                                  },
                                ]
                              },
                              {
                                id: "certificacoes",
                                label: "certificacoes",
                                tableName: "certificacoes",
                                icon: <Table2 className="tree-icon text-pgadmin-icon-table" />,
                                children: [
                                  {
                                    id: "certificacoes-columns",
                                    label: "Columns (5)",
                                    icon: <Folder className="tree-icon text-purple-400" />,
                                    children: [
                                      { id: "cert-col-id", label: "id (integer)", icon: <Key className="tree-icon text-yellow-500" /> },
                                      { id: "cert-col-nome", label: "nome (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "cert-col-emissor", label: "emissor (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "cert-col-data", label: "data_emissao (date)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "cert-col-url", label: "url_credencial (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                    ]
                                  },
                                  {
                                    id: "certificacoes-constraints",
                                    label: "Constraints (1)",
                                    icon: <Folder className="tree-icon text-orange-400" />,
                                    children: [
                                      { id: "cert-pk", label: "certificacoes_pkey (PRIMARY KEY)", icon: <Key className="tree-icon text-yellow-500" /> },
                                    ]
                                  },
                                  {
                                    id: "certificacoes-indexes",
                                    label: "Indexes (1)",
                                    icon: <Folder className="tree-icon text-green-400" />,
                                  },
                                  {
                                    id: "certificacoes-triggers",
                                    label: "Triggers (0)",
                                    icon: <Folder className="tree-icon text-pink-400" />,
                                  },
                                ]
                              },
                              {
                                id: "idiomas",
                                label: "idiomas",
                                tableName: "idiomas",
                                icon: <Table2 className="tree-icon text-pgadmin-icon-table" />,
                                children: [
                                  {
                                    id: "idiomas-columns",
                                    label: "Columns (3)",
                                    icon: <Folder className="tree-icon text-purple-400" />,
                                    children: [
                                      { id: "idi-col-id", label: "id (integer)", icon: <Key className="tree-icon text-yellow-500" /> },
                                      { id: "idi-col-idioma", label: "idioma (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "idi-col-nivel", label: "nivel (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                    ]
                                  },
                                  {
                                    id: "idiomas-constraints",
                                    label: "Constraints (1)",
                                    icon: <Folder className="tree-icon text-orange-400" />,
                                    children: [
                                      { id: "idi-pk", label: "idiomas_pkey (PRIMARY KEY)", icon: <Key className="tree-icon text-yellow-500" /> },
                                    ]
                                  },
                                  {
                                    id: "idiomas-indexes",
                                    label: "Indexes (1)",
                                    icon: <Folder className="tree-icon text-green-400" />,
                                  },
                                  {
                                    id: "idiomas-triggers",
                                    label: "Triggers (0)",
                                    icon: <Folder className="tree-icon text-pink-400" />,
                                  },
                                ]
                              },
                              {
                                id: "projetos",
                                label: "projetos",
                                tableName: "projetos",
                                icon: <Table2 className="tree-icon text-pgadmin-icon-table" />,
                                children: [
                                  {
                                    id: "projetos-columns",
                                    label: "Columns (6)",
                                    icon: <Folder className="tree-icon text-purple-400" />,
                                    children: [
                                      { id: "proj-col-id", label: "id (integer)", icon: <Key className="tree-icon text-yellow-500" /> },
                                      { id: "proj-col-nome", label: "nome (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "proj-col-desc", label: "descricao (text)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "proj-col-tec", label: "tecnologias (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "proj-col-url", label: "url (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                      { id: "proj-col-github", label: "github_url (varchar)", icon: <Columns3 className="tree-icon text-gray-400" /> },
                                    ]
                                  },
                                  {
                                    id: "projetos-constraints",
                                    label: "Constraints (1)",
                                    icon: <Folder className="tree-icon text-orange-400" />,
                                    children: [
                                      { id: "proj-pk", label: "projetos_pkey (PRIMARY KEY)", icon: <Key className="tree-icon text-yellow-500" /> },
                                    ]
                                  },
                                  {
                                    id: "projetos-indexes",
                                    label: "Indexes (1)",
                                    icon: <Folder className="tree-icon text-green-400" />,
                                  },
                                  {
                                    id: "projetos-triggers",
                                    label: "Triggers (0)",
                                    icon: <Folder className="tree-icon text-pink-400" />,
                                  },
                                ]
                              },
                            ],
                          },
                          // VIEWS
                          {
                            id: "views",
                            label: "Views (0)",
                            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                          },
                          // MATERIALIZED VIEWS
                          {
                            id: "mviews",
                            label: "Materialized Views (0)",
                            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                          },
                          // FUNCTIONS
                          {
                            id: "functions",
                            label: "Functions (0)",
                            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                          },
                          // PROCEDURES
                          {
                            id: "procedures",
                            label: "Procedures (0)",
                            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                          },
                          // SEQUENCES
                          {
                            id: "sequences",
                            label: "Sequences (7)",
                            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                            children: [
                              { id: "seq-prof", label: "profissional_id_seq", icon: <Hash className="tree-icon text-blue-400" /> },
                              { id: "seq-hab", label: "habilidades_id_seq", icon: <Hash className="tree-icon text-blue-400" /> },
                              { id: "seq-exp", label: "experiencias_id_seq", icon: <Hash className="tree-icon text-blue-400" /> },
                              { id: "seq-edu", label: "educacao_id_seq", icon: <Hash className="tree-icon text-blue-400" /> },
                              { id: "seq-cert", label: "certificacoes_id_seq", icon: <Hash className="tree-icon text-blue-400" /> },
                              { id: "seq-idi", label: "idiomas_id_seq", icon: <Hash className="tree-icon text-blue-400" /> },
                              { id: "seq-proj", label: "projetos_id_seq", icon: <Hash className="tree-icon text-blue-400" /> },
                            ]
                          },
                          // TRIGGER FUNCTIONS
                          {
                            id: "trigger-functions",
                            label: "Trigger Functions (0)",
                            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                          },
                        ],
                      },
                    ],
                  },
                  // EXTENSIONS
                  {
                    id: "extensions",
                    label: "Extensions (0)",
                    icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                  },
                  // LANGUAGES
                  {
                    id: "languages",
                    label: "Languages (4)",
                    icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
                    children: [
                      { id: "lang-c", label: "c", icon: <Code className="tree-icon text-gray-400" /> },
                      { id: "lang-internal", label: "internal", icon: <Code className="tree-icon text-gray-400" /> },
                      { id: "lang-plpgsql", label: "plpgsql", icon: <Code className="tree-icon text-gray-400" /> },
                      { id: "lang-sql", label: "sql", icon: <Code className="tree-icon text-gray-400" /> },
                    ]
                  },
                ],
              },
            ],
          },
          // LOGIN/GROUP ROLES
          {
            id: "login-roles",
            label: "Login/Group Roles (1)",
            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
            children: [
              { id: "role-postgres", label: "postgres", icon: <User className="tree-icon text-blue-400" /> },
            ]
          },
          // CERTIFICADOS PDF
          {
            id: "certificates",
            label: `Certificates (${getCertificates().length})`,
            icon: <Folder className="tree-icon text-pgadmin-icon-folder" />,
            children: getCertificates().map((cert: Certificate) => ({
              id: cert.id,
              label: cert.name,
              icon: <FileText className="tree-icon text-red-500" />,
              certificatePath: cert.path
            }))
          },
        ],
      },
    ],
  },
];

function TreeNodeItem({ 
  node, 
  level = 0, 
  selectedTable, 
  onSelectTable,
  selectedCertificate,
  onSelectCertificate,
  defaultExpanded = false 
}: { 
  node: TreeNode; 
  level?: number; 
  selectedTable: TableName | null;
  onSelectTable: (table: TableName) => void;
  selectedCertificate: string | null;
  onSelectCertificate: (path: string) => void;
  defaultExpanded?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded || level < 2);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = node.tableName === selectedTable || node.certificatePath === selectedCertificate;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
    if (node.tableName) {
      onSelectTable(node.tableName);
    }
    if (node.certificatePath) {
      onSelectCertificate(node.certificatePath);
    }
  };

  // Determina qual ícone de pasta mostrar quando expandido
  const getFolderIcon = () => {
    if (!hasChildren || !isExpanded) return node.icon;
    
    const folderIds = [
      "databases", "schemas", "tables", "views", "mviews", "functions", 
      "procedures", "sequences", "trigger-functions", "extensions", 
      "languages", "login-roles", "certificates"
    ];
    
    if (folderIds.includes(node.id) || node.id.endsWith("-columns") || 
        node.id.endsWith("-constraints") || node.id.endsWith("-indexes") || 
        node.id.endsWith("-triggers")) {
      return <FolderOpen className="tree-icon text-pgadmin-icon-folder" />;
    }
    
    return node.icon;
  };

  return (
    <div>
      <div
        className={`pgadmin-tree-item ${isSelected ? 'active' : ''} transition-all duration-200 hover:bg-pgadmin-sidebar-hover/50`}
        style={{ paddingLeft: `${level * 12 + 4}px` }}
        onClick={handleClick}
      >
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="w-3 h-3 flex-shrink-0 text-sidebar-foreground/60 transition-transform duration-200" />
          ) : (
            <ChevronRight className="w-3 h-3 flex-shrink-0 text-sidebar-foreground/60 transition-transform duration-200" />
          )
        ) : (
          <span className="w-3" />
        )}
        {getFolderIcon()}
        <span className="truncate transition-colors duration-150">{node.label}</span>
      </div>
      {hasChildren && isExpanded && (
        <div className="animate-slide-down overflow-hidden">
          {node.children!.map((child) => (
            <TreeNodeItem 
              key={child.id} 
              node={child} 
              level={level + 1} 
              selectedTable={selectedTable}
              onSelectTable={onSelectTable}
              selectedCertificate={selectedCertificate}
              onSelectCertificate={onSelectCertificate}
              defaultExpanded={level < 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ObjectExplorer({ selectedTable, onSelectTable, selectedCertificate, onSelectCertificate }: ObjectExplorerProps) {
  return (
    <aside className="w-full sm:w-64 sm:min-w-64 h-full pgadmin-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="pgadmin-panel-header bg-sidebar border-b border-sidebar-border">
        <Table2 className="w-4 h-4 text-sidebar-foreground" />
        <span className="font-semibold text-[12px] text-sidebar-foreground">Object Explorer</span>
      </div>
      <div className="py-1">
        {treeData.map((node) => (
          <TreeNodeItem 
            key={node.id} 
            node={node} 
            selectedTable={selectedTable}
            onSelectTable={onSelectTable}
            selectedCertificate={selectedCertificate}
            onSelectCertificate={onSelectCertificate}
            defaultExpanded={true}
          />
        ))}
      </div>
    </aside>
  );
}
