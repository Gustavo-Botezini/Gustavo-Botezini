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

export const certificates: Certificate[] = [
  {
    id: "cert-alura-1",
    name: "Certificado_-_Alura_-_Cursos_2.pdf",
    path: "/certificados/Certificado_-_Alura_-_Cursos_2.pdf",
    displayName: "Alura - Cursos 2",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-alura-2",
    name: "Certificado_-_Alura_-_Cursos_2_orientao_a_objetos.pdf",
    path: "/certificados/Certificado_-_Alura_-_Cursos_2_orientao_a_objetos.pdf",
    displayName: "Alura - Orientação a Objetos",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-alura-3",
    name: "Certificado_-_Alura_-_Cursos_3.pdf",
    path: "/certificados/Certificado_-_Alura_-_Cursos_3.pdf",
    displayName: "Alura - Cursos 3",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-dba",
    name: "Administrador_de_Banco_de_Dados-Certificado_digital_3459553 (1).pdf",
    path: "/certificados/Administrador_de_Banco_de_Dados-Certificado_digital_3459553 (1).pdf",
    displayName: "Administrador de Banco de Dados",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-oracle-plsql",
    name: "Banco_de_Dados_Oracle_PLSQLIFRS.pdf",
    path: "/certificados/Banco_de_Dados_Oracle_PLSQLIFRS.pdf",
    displayName: "Oracle PL/SQL - IFRS",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-tic-nivelamento",
    name: "TIC_etapa_de_nivelamento.pdf",
    path: "/certificados/TIC_etapa_de_nivelamento.pdf",
    displayName: "TIC - Etapa de Nivelamento",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-intro",
    name: "introducao-postgresql-primeiros-passos.pdf",
    path: "/certificados/introducao-postgresql-primeiros-passos.pdf",
    displayName: "PostgreSQL - Introdução e Primeiros Passos",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-warehouse",
    name: "modelagem-data-warehouse-atributos-hierarquia-indicadores.pdf",
    path: "/certificados/modelagem-data-warehouse-atributos-hierarquia-indicadores.pdf",
    displayName: "Modelagem Data Warehouse",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-dml-ddl",
    name: "pgsql-comandos-dml-ddl.pdf",
    path: "/certificados/pgsql-comandos-dml-ddl.pdf",
    displayName: "PostgreSQL - Comandos DML e DDL",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-backup",
    name: "postgresql-backup-recuperacao.pdf",
    path: "/certificados/postgresql-backup-recuperacao.pdf",
    displayName: "PostgreSQL - Backup e Recuperação",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-performance",
    name: "postgresql-desempenho-otimizacao.pdf",
    path: "/certificados/postgresql-desempenho-otimizacao.pdf",
    displayName: "PostgreSQL - Desempenho e Otimização",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-admin-otimizacao",
    name: "postgresql-administracao-otimizacao.pdf",
    path: "/certificados/postgresql-administracao-otimizacao.pdf",
    displayName: "PostgreSQL - Administração e Otimização",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-procedures",
    name: "postgresql-procedures.pdf",
    path: "/certificados/postgresql-procedures.pdf",
    displayName: "PostgreSQL - Procedures",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-replication",
    name: "postgresql-replicacao-alta-disponibilidade.pdf",
    path: "/certificados/postgresql-replicacao-alta-disponibilidade.pdf",
    displayName: "PostgreSQL - Replicação e Alta Disponibilidade",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-triggers",
    name: "postgresql-triggers-transacoes-erros-cursores.pdf",
    path: "/certificados/postgresql-triggers-transacoes-erros-cursores.pdf",
    displayName: "PostgreSQL - Triggers, Transações e Cursores",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-views",
    name: "postgresql-views-sub-consultas-funcoes.pdf",
    path: "/certificados/postgresql-views-sub-consultas-funcoes.pdf",
    displayName: "PostgreSQL - Views, Sub-consultas e Funções",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-pg-admin",
    name: "PostgreSQL_administracao_e_monitoramento (1).pdf",
    path: "/certificados/PostgreSQL_administracao_e_monitoramento (1).pdf",
    displayName: "PostgreSQL - Administração e Monitoramento",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-1",
    name: "certificacao-linux-lpi-essentials-evolution-distributions.pdf",
    path: "/certificados/certificacao-linux-lpi-essentials-evolution-distributions.pdf",
    displayName: "Linux LPI Essentials - Evolution & Distributions",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-2",
    name: "certificacao-linux-lpi-essentials-command-line-basics.pdf",
    path: "/certificados/certificacao-linux-lpi-essentials-command-line-basics.pdf",
    displayName: "Linux LPI Essentials - Command Line Basics",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-3",
    name: "certificacao-linux-lpi-essentials-open-source-software-licensing.pdf",
    path: "/certificados/certificacao-linux-lpi-essentials-open-source-software-licensing.pdf",
    displayName: "Linux LPI Essentials - Open Source & Licensing",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-4",
    name: "certificacao-linux-lpi-essentials-redirecting-i-o.pdf",
    path: "/certificados/certificacao-linux-lpi-essentials-redirecting-i-o.pdf",
    displayName: "Linux LPI Essentials - Redirecting I/O",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-linux-essentials-5",
    name: "certificacao-linux-lpi-essentials-using-command-line-get-help.pdf",
    path: "/certificados/certificacao-linux-lpi-essentials-using-command-line-get-help.pdf",
    displayName: "Linux LPI Essentials - Using Command Line",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-devops-cli",
    name: "devops-conceitos-comandos-scripts-linux-cli.pdf",
    path: "/certificados/devops-conceitos-comandos-scripts-linux-cli.pdf",
    displayName: "DevOps - Linux CLI e Scripts",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-devops-docker",
    name: "devops-construindo-gerindo-containers-docker.pdf",
    path: "/certificados/devops-construindo-gerindo-containers-docker.pdf",
    displayName: "DevOps - Docker e Containers",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-devops-security",
    name: "devops-trafego-seguro-comunicacoes-web.pdf",
    path: "/certificados/devops-trafego-seguro-comunicacoes-web.pdf",
    displayName: "DevOps - Tráfego Seguro e Comunicações Web",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-1",
    name: "Coursera_H5ABHMT0EXS8.pdf",
    path: "/certificados/Coursera_H5ABHMT0EXS8.pdf",
    displayName: "Coursera - Certificate H5ABHMT0EXS8",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-2",
    name: "Coursera_RWM14OE6O06W.pdf",
    path: "/certificados/Coursera_RWM14OE6O06W.pdf",
    displayName: "Coursera - Certificate RWM14OE6O06W",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-3",
    name: "Coursera_V0Z0NQM4EHJ3.pdf",
    path: "/certificados/Coursera_V0Z0NQM4EHJ3.pdf",
    displayName: "Coursera - Certificate V0Z0NQM4EHJ3",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-4",
    name: "Coursera_W282USQ3RDAK.pdf",
    path: "/certificados/Coursera_W282USQ3RDAK.pdf",
    displayName: "Coursera - Certificate W282USQ3RDAK",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-coursera-5",
    name: "Coursera_ZU5KPZ4AF9TR.pdf",
    path: "/certificados/Coursera_ZU5KPZ4AF9TR.pdf",
    displayName: "Coursera - Certificate ZU5KPZ4AF9TR",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-cyber-automate",
    name: "Automate_Cybersecurity_Tasks_with_Python.pdf",
    path: "/certificados/Automate_Cybersecurity_Tasks_with_Python.pdf",
    displayName: "Automate Cybersecurity Tasks with Python",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-cyber-prepare",
    name: "Put_It_to_Work_Prepare_for_Cybersecurity_Jobs.pdf",
    path: "/certificados/Put_It_to_Work_Prepare_for_Cybersecurity_Jobs.pdf",
    displayName: "Prepare for Cybersecurity Jobs",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-cyber-detection",
    name: "Sound_the_Alarm_Detection_and_Response.pdf",
    path: "/certificados/Sound_the_Alarm_Detection_and_Response.pdf",
    displayName: "Sound the Alarm - Detection and Response",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-ingles-2",
    name: "Ingls_2-Certificado_digital_3405401.pdf",
    path: "/certificados/Ingls_2-Certificado_digital_3405401.pdf",
    displayName: "Inglês 2 - Certificado Digital",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-ingles-3",
    name: "Ingls_3.pdf",
    path: "/certificados/Ingls_3.pdf",
    displayName: "Inglês 3",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-projeto-brisa",
    name: "Projeto_Brisa.pdf",
    path: "/certificados/Projeto_Brisa.pdf",
    displayName: "Projeto Brisa",
    uploadDate: "2025-12-29"
  },
  {
    id: "cert-686b00147f88d",
    name: "686b00147f88d.pdf",
    path: "/certificados/686b00147f88d.pdf",
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
