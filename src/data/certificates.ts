// Lista de certificados disponíveis
// Para adicionar novos certificados, basta colocar os arquivos PDF na pasta public/certificados/
// e adicionar o nome do arquivo aqui

export interface Certificate {
  id: string;
  name: string;
  path: string;
  displayName: string;
  uploadDate: string;
}

// Helper para obter o caminho correto dos certificados
const getCertPath = (filename: string) => `${import.meta.env.BASE_URL}certificados/${filename}`;

export const certificates: Certificate[] = [
  {
    id: "cert-alura-1",
    name: "Certificado_-_Alura_-_Cursos_2.pdf",
    path: getCertPath("Certificado_-_Alura_-_Cursos_2.pdf"),
    displayName: "Alura - Cursos 2",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-alura-2",
    name: "Certificado_-_Alura_-_Cursos_2_orientao_a_objetos.pdf",
    path: getCertPath("Certificado_-_Alura_-_Cursos_2_orientao_a_objetos.pdf"),
    displayName: "Alura - Orientação a Objetos",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-alura-3",
    name: "Certificado_-_Alura_-_Cursos_3.pdf",
    path: getCertPath("Certificado_-_Alura_-_Cursos_3.pdf"),
    displayName: "Alura - Cursos 3",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-dba",
    name: "Administrador_de_Banco_de_Dados-Certificado_digital_3459553 (1).pdf",
    path: getCertPath("Administrador_de_Banco_de_Dados-Certificado_digital_3459553 (1).pdf"),
    displayName: "Administrador de Banco de Dados",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-oracle-plsql",
    name: "Banco_de_Dados_Oracle_PLSQLIFRS.pdf",
    path: getCertPath("Banco_de_Dados_Oracle_PLSQLIFRS.pdf"),
    displayName: "Oracle PL/SQL - IFRS",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-tic-nivelamento",
    name: "TIC_etapa_de_nivelamento.pdf",
    path: getCertPath("TIC_etapa_de_nivelamento.pdf"),
    displayName: "TIC - Etapa de Nivelamento",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-intro",
    name: "introducao-postgresql-primeiros-passos.pdf",
    path: getCertPath("introducao-postgresql-primeiros-passos.pdf"),
    displayName: "PostgreSQL - Introdução e Primeiros Passos",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-warehouse",
    name: "modelagem-data-warehouse-atributos-hierarquia-indicadores.pdf",
    path: getCertPath("modelagem-data-warehouse-atributos-hierarquia-indicadores.pdf"),
    displayName: "Modelagem Data Warehouse",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-dml-ddl",
    name: "pgsql-comandos-dml-ddl.pdf",
    path: getCertPath("pgsql-comandos-dml-ddl.pdf"),
    displayName: "PostgreSQL - Comandos DML e DDL",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-backup",
    name: "postgresql-backup-recuperacao.pdf",
    path: getCertPath("postgresql-backup-recuperacao.pdf"),
    displayName: "PostgreSQL - Backup e Recuperação",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-performance",
    name: "postgresql-desempenho-otimizacao.pdf",
    path: getCertPath("postgresql-desempenho-otimizacao.pdf"),
    displayName: "PostgreSQL - Desempenho e Otimização",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-admin-otimizacao",
    name: "postgresql-administracao-otimizacao.pdf",
    path: getCertPath("postgresql-administracao-otimizacao.pdf"),
    displayName: "PostgreSQL - Administração e Otimização",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-procedures",
    name: "postgresql-procedures.pdf",
    path: getCertPath("postgresql-procedures.pdf"),
    displayName: "PostgreSQL - Procedures",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-replication",
    name: "postgresql-replicacao-alta-disponibilidade.pdf",
    path: getCertPath("postgresql-replicacao-alta-disponibilidade.pdf"),
    displayName: "PostgreSQL - Replicação e Alta Disponibilidade",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-triggers",
    name: "postgresql-triggers-transacoes-erros-cursores.pdf",
    path: getCertPath("postgresql-triggers-transacoes-erros-cursores.pdf"),
    displayName: "PostgreSQL - Triggers, Transações e Cursores",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-views",
    name: "postgresql-views-sub-consultas-funcoes.pdf",
    path: getCertPath("postgresql-views-sub-consultas-funcoes.pdf"),
    displayName: "PostgreSQL - Views, Sub-consultas e Funções",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-admin",
    name: "PostgreSQL_administracao_e_monitoramento (1).pdf",
    path: getCertPath("PostgreSQL_administracao_e_monitoramento (1).pdf"),
    displayName: "PostgreSQL - Administração e Monitoramento",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-1",
    name: "certificacao-linux-lpi-essentials-evolution-distributions.pdf",
    path: getCertPath("certificacao-linux-lpi-essentials-evolution-distributions.pdf"),
    displayName: "Linux LPI Essentials - Evolution & Distributions",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-2",
    name: "certificacao-linux-lpi-essentials-command-line-basics.pdf",
    path: getCertPath("certificacao-linux-lpi-essentials-command-line-basics.pdf"),
    displayName: "Linux LPI Essentials - Command Line Basics",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-3",
    name: "certificacao-linux-lpi-essentials-open-source-software-licensing.pdf",
    path: getCertPath("certificacao-linux-lpi-essentials-open-source-software-licensing.pdf"),
    displayName: "Linux LPI Essentials - Open Source & Licensing",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-4",
    name: "certificacao-linux-lpi-essentials-redirecting-i-o.pdf",
    path: getCertPath("certificacao-linux-lpi-essentials-redirecting-i-o.pdf"),
    displayName: "Linux LPI Essentials - Redirecting I/O",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-5",
    name: "certificacao-linux-lpi-essentials-using-command-line-get-help.pdf",
    path: getCertPath("certificacao-linux-lpi-essentials-using-command-line-get-help.pdf"),
    displayName: "Linux LPI Essentials - Using Command Line",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-devops-cli",
    name: "devops-conceitos-comandos-scripts-linux-cli.pdf",
    path: getCertPath("devops-conceitos-comandos-scripts-linux-cli.pdf"),
    displayName: "DevOps - Linux CLI e Scripts",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-devops-docker",
    name: "devops-construindo-gerindo-containers-docker.pdf",
    path: getCertPath("devops-construindo-gerindo-containers-docker.pdf"),
    displayName: "DevOps - Docker e Containers",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-devops-security",
    name: "devops-trafego-seguro-comunicacoes-web.pdf",
    path: getCertPath("devops-trafego-seguro-comunicacoes-web.pdf"),
    displayName: "DevOps - Tráfego Seguro e Comunicações Web",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-1",
    name: "Coursera_H5ABHMT0EXS8.pdf",
    path: getCertPath("Coursera_H5ABHMT0EXS8.pdf"),
    displayName: "Coursera - Certificate H5ABHMT0EXS8",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-2",
    name: "Coursera_RWM14OE6O06W.pdf",
    path: getCertPath("Coursera_RWM14OE6O06W.pdf"),
    displayName: "Coursera - Certificate RWM14OE6O06W",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-3",
    name: "Coursera_V0Z0NQM4EHJ3.pdf",
    path: getCertPath("Coursera_V0Z0NQM4EHJ3.pdf"),
    displayName: "Coursera - Certificate V0Z0NQM4EHJ3",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-4",
    name: "Coursera_W282USQ3RDAK.pdf",
    path: getCertPath("Coursera_W282USQ3RDAK.pdf"),
    displayName: "Coursera - Certificate W282USQ3RDAK",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-5",
    name: "Coursera_ZU5KPZ4AF9TR.pdf",
    path: getCertPath("Coursera_ZU5KPZ4AF9TR.pdf"),
    displayName: "Coursera - Certificate ZU5KPZ4AF9TR",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-cyber-automate",
    name: "Automate_Cybersecurity_Tasks_with_Python.pdf",
    path: getCertPath("Automate_Cybersecurity_Tasks_with_Python.pdf"),
    displayName: "Automate Cybersecurity Tasks with Python",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-cyber-prepare",
    name: "Put_It_to_Work_Prepare_for_Cybersecurity_Jobs.pdf",
    path: getCertPath("Put_It_to_Work_Prepare_for_Cybersecurity_Jobs.pdf"),
    displayName: "Prepare for Cybersecurity Jobs",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-cyber-detection",
    name: "Sound_the_Alarm_Detection_and_Response.pdf",
    path: getCertPath("Sound_the_Alarm_Detection_and_Response.pdf"),
    displayName: "Sound the Alarm - Detection and Response",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-ingles-2",
    name: "Ingls_2-Certificado_digital_3405401.pdf",
    path: getCertPath("Ingls_2-Certificado_digital_3405401.pdf"),
    displayName: "Inglês 2 - Certificado Digital",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-ingles-3",
    name: "Ingls_3.pdf",
    path: getCertPath("Ingls_3.pdf"),
    displayName: "Inglês 3",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-projeto-brisa",
    name: "Projeto_Brisa.pdf",
    path: getCertPath("Projeto_Brisa.pdf"),
    displayName: "Projeto Brisa",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-686b00147f88d",
    name: "686b00147f88d.pdf",
    path: getCertPath("686b00147f88d.pdf"),
    displayName: "Certificado 686b00147f88d",
    uploadDate: "2025-12-29"
  },
];

export function getCertificates(): Certificate[] {
  return certificates;
}

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find(cert => cert.id === id);
}

export function getCertificateByPath(path: string): Certificate | undefined {
  return certificates.find(cert => cert.path === path);
}
