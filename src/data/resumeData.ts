export interface Professional {
  nome: string;
  titulo_atual: string;
  email: string;
  linkedin: string;
  github: string;
  sobre_mim: string;
}

export interface Habilidade {
  nome_habilidade: string;
  categoria: 'HARD' | 'SOFT';
  nivel_proficiencia: number;
}

export interface Experiencia {
  empresa: string;
  cargo: string;
  data_inicio: string;
  data_fim: string | null;
  conquistas: string[];
  stack_utilizada: string[];
}

export interface Certificacao {
  nome_certificacao: string;
  emissor: string;
  ano_conclusao: number;
  link_credencial?: string;
}

export interface Educacao {
  instituicao: string;
  curso: string;
  grau_academico: string;
  ano_inicio: string;
  ano_conclusao: string | null;
}

export interface Idioma {
  idioma: string;
  nivel_fluencia: 'Básico' | 'Intermediário' | 'Avançado' | 'Nativo';
}

export interface Projeto {
  nome_projeto: string;
  descricao: string;
  tecnologias_utilizadas: string[];
  link_projeto?: string;
}

// Sample data for demonstration
export const profissional: Professional = {
  nome: "Gustavo Botezini",
  titulo_atual: "Junior",
  email: "gustavo.botezini@gmail.com",
  linkedin: "linkedin.com/in/gustavo-botezini-0144a32b6",
  github: "github.com/gustavo-botezini",
  sobre_mim: "Desenvolvedor Full Stack com experiência em PHP, Node.js e React.js, e sólida expertise em PostgreSQL. Atualmente atuando como Programador Júnior e Presidente da FronteiraTec, combinando habilidades técnicas em desenvolvimento de sistemas com gestão estratégica de pessoas e projetos. Experiência em otimização de bancos de dados, desenvolvimento de CRM, metodologias ágeis e liderança de equipes."
};

export const hardSkills: Habilidade[] = [
  // Database & SQL
  { nome_habilidade: "PostgreSQL", categoria: "HARD", nivel_proficiencia: 3 },
  { nome_habilidade: "SQL/PL-pgSQL", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "Oracle Database", categoria: "HARD", nivel_proficiencia: 1 },
  { nome_habilidade: "PL/SQL", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "DML/DDL", categoria: "HARD", nivel_proficiencia: 5 },
  { nome_habilidade: "Modelagem de Dados", categoria: "HARD", nivel_proficiencia: 2 },
  
  // Linux & DevOps
  { nome_habilidade: "Linux", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "Docker", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "DevOps", categoria: "HARD", nivel_proficiencia: 2 },
  
  // Programação & Desenvolvimento
  { nome_habilidade: "Python", categoria: "HARD", nivel_proficiencia: 1 },
  { nome_habilidade: "PHP", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "C", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "C#", categoria: "HARD", nivel_proficiencia: 1 },
  { nome_habilidade: "Node.js", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "React.js", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "Orientação a Objetos", categoria: "HARD", nivel_proficiencia: 3 },
  { nome_habilidade: "Git", categoria: "HARD", nivel_proficiencia: 3 },
  { nome_habilidade: "GitHub", categoria: "HARD", nivel_proficiencia: 3 },
  
  // Segurança & Redes
  { nome_habilidade: "Cybersecurity", categoria: "HARD", nivel_proficiencia: 3 },
  { nome_habilidade: "Automação com Python", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "Detection & Response", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "Comunicações Web Seguras", categoria: "HARD", nivel_proficiencia: 2 },
  { nome_habilidade: "Tráfego Seguro", categoria: "HARD", nivel_proficiencia: 2 },
  
  // Idiomas
  { nome_habilidade: "Inglês Técnico", categoria: "HARD", nivel_proficiencia: 3 },
];

export const softSkills: Habilidade[] = [
  { nome_habilidade: "Resolução de Problemas", categoria: "SOFT", nivel_proficiencia: 3 },
  { nome_habilidade: "Documentação Técnica", categoria: "SOFT", nivel_proficiencia: 2 },
  { nome_habilidade: "Trabalho em Equipe", categoria: "SOFT", nivel_proficiencia: 4 },
  { nome_habilidade: "Comunicação com a Equipe", categoria: "SOFT", nivel_proficiencia: 4 },
  { nome_habilidade: "Comunicação", categoria: "SOFT", nivel_proficiencia: 3 },
  { nome_habilidade: "Autogestão", categoria: "SOFT", nivel_proficiencia: 4 },
  { nome_habilidade: "Disciplina", categoria: "SOFT", nivel_proficiencia: 4 },
  { nome_habilidade: "Cumprimento de Normas", categoria: "SOFT", nivel_proficiencia: 5 },
];

export const experiencias: Experiencia[] = [
  {
    empresa: "fflip",
    cargo: "Programador Júnior - Desenvolvedor Full Stack PHP",
    data_inicio: "2025-04",
    data_fim: null,
    conquistas: [
      "Manutenção e evolução de sistema CRM proprietário, garantindo a estabilidade e a implementação de novas funcionalidades",
      "Desenvolvimento Full Stack de projetos secundários, utilizando PHP para o backend",
      "Otimização de performance em bancos de dados PostgreSQL, otimizando consultas complexas para reduzir o tempo de resposta do sistema",
      "Atuação em ambiente colaborativo utilizando Engenharia de Software e Metodologias Ágeis (Scrum/Kanban) para entrega contínua de valor"
    ],
    stack_utilizada: ["PHP", "PostgreSQL", "Full Stack", "CRM", "Scrum", "Kanban"]
  },
  {
    empresa: "FronteiraTec (FTEC)",
    cargo: "Presidente",
    data_inicio: "2025-11",
    data_fim: "2026-12",
    conquistas: [
      "Gestão Estratégica de Pessoas: Liderança da equipe, promovendo o desenvolvimento de competências e o alinhamento com a cultura organizacional",
      "Prospecção e Negociação: Responsável pela interface direta com clientes, desde a prospecção ativa até a negociação e fechamento de contratos",
      "Coordenação de projetos e eventos tecnológicos",
      "Desenvolvimento de parcerias estratégicas com empresas e instituições"
    ],
    stack_utilizada: ["Gestão de Projetos", "Liderança", "Negociação", "Estratégia"]
  },
  {
    empresa: "Incubadora de Negócios INNE - UFFS",
    cargo: "Bolsista",
    data_inicio: "2025-03",
    data_fim: "2026-03",
    conquistas: [
      "Atualização do sistema utilizado na Incubadora de Negócios INNE da UFFS",
      "Auxílio no desenvolvimento de eventos e assistência de incubados",
      "Desenvolvimento de modelos 3D",
      "Manutenção de equipamentos eletrônicos"
    ],
    stack_utilizada: ["Desenvolvimento de Sistemas", "Modelagem 3D", "Manutenção Eletrônica", "Gestão de Eventos"]
  }
];

export const projetos: Projeto[] = [
  {
    nome_projeto: "Sistema Rastreador de Propostas",
    descricao: "Back-end em PHP 8.4 com PostgreSQL para rastreamento de propostas comerciais, incluindo geração de relatórios e dashboards, logs de atividades dos usuários como dos clientes e sistema multi tenant.",
    tecnologias_utilizadas: ["PostgreSQL", "PHP", "Docker"],
  },
  {
    nome_projeto: "Sistema Rastreador de Propostas",
    descricao: "Sistema de gerenciamento de uma empresa de gás de cozinha GLP.",
    tecnologias_utilizadas: ["PostgreSQL", "React", "JavaScript", "CSS", "HTML", "Material UI", "Trello"],
    link_projeto: "https://github.com/Gustavo-Botezini/Trabalho-Integrador"
  },
];

export const certificacoes: Certificacao[] = [
  {
    nome_certificacao: "PostgreSQL Essentials",
    emissor: "PostgreSQL Tutorial",
    ano_conclusao: 2024,
    link_credencial: "credential.net/abc123"
  },
  {
    nome_certificacao: "SQL Fundamentals",
    emissor: "DataCamp",
    ano_conclusao: 2023,
    link_credencial: "datacamp.com/certificate/sql"
  },
  {
    nome_certificacao: "Linux Essentials",
    emissor: "LPI",
    ano_conclusao: 2023
  }
];

export const educacao: Educacao[] = [
  {
    instituicao: "Universidade Federal da Fronteira Sul (UFFS)",
    curso: "Ciência da Computação",
    grau_academico: "Bacharelado",
    ano_inicio: "2023",
    ano_conclusao: "2027"
  },

];

export const idiomas: Idioma[] = [
  { idioma: "Português", nivel_fluencia: "Nativo" },
  { idioma: "Inglês", nivel_fluencia: "Intermediário" },
  { idioma: "Alemão", nivel_fluencia: "Básico" }
];
