CREATE DATABASE curriculo;

ALTER DATABASE curriculo SET datestyle = 'ISO, DMY';

CREATE TYPE nivel_senioridade AS ENUM ('Junior', 'Pleno', 'Senior');

-- 2. Schema de Identidade
CREATE TABLE profissional (
    id_profissional SERIAL,
    nome VARCHAR(100) NOT NULL,
    titulo_atual nivel_senioridade,
    email VARCHAR(150),
    linkedin VARCHAR(255),
    github VARCHAR(255),
    sobre_mim TEXT,

    CONSTRAINT pk_id_profissional PRIMARY KEY (id_profissional),
    CONSTRAINT uk_email UNIQUE (email)
);

CREATE TYPE categoria AS ENUM ('HARD', 'SOFT');

CREATE TABLE habilidades (
    id_habilidade SERIAL,
    id_profissional INT NOT NULL,
    categoria categoria,
    nome_habilidade VARCHAR(100) NOT NULL,
    nivel_proficiencia INT CHECK (nivel_proficiencia BETWEEN 1 AND 5),

    CONSTRAINT pk_habilidades PRIMARY KEY (id_habilidade, categoria), -- PK deve incluir a chave de partição
    CONSTRAINT fk_id_profissional FOREIGN KEY (id_profissional) 
        REFERENCES profissional(id_profissional) ON DELETE CASCADE
) PARTITION BY LIST (categoria);

-- Partição para Hard Skills (Tecnologias, Bancos, Cloud)
CREATE TABLE hard_skills PARTITION OF habilidades
    FOR VALUES IN ('HARD');

-- Partição para Soft Skills (Liderança, Comunicação, Gestão)
CREATE TABLE soft_skills PARTITION OF habilidades
    FOR VALUES IN ('SOFT');

CREATE INDEX idx_id_profissional ON habilidades(id_profissional);


-- 3. Histórico de Experiência (Relacionamento 1:N)
CREATE TABLE experiencias (
    id_experiencias SERIAL,
    id_profissional INT NOT NULL,
    empresa VARCHAR(100),
    cargo VARCHAR(100),
    data_inicio DATE DEFAULT CURRENT_DATE,
    data_fim DATE, -- NULL se for atual
    conquistas TEXT[], -- Array de strings com as bullet points
    stack_utilizada TEXT[],

    CONSTRAINT pk_experiencias PRIMARY KEY (id_experiencias),
    CONSTRAINT fk_profissional_experiencia FOREIGN KEY (id_profissional) 
        REFERENCES profissional(id_profissional) ON DELETE CASCADE
);
CREATE INDEX idx_experiencias_profissional ON experiencias(id_profissional);

-- 4. Educação e Certificações
CREATE TABLE certificacoes (
    id_certificacao SERIAL,
    id_profissional INT NOT NULL,
    nome_certificacao VARCHAR(200),
    emissor VARCHAR(100),
    ano_conclusao INT,
    link_credencial VARCHAR(255),

    CONSTRAINT pk_certificacao PRIMARY KEY (id_certificacao),
    CONSTRAINT fk_profissional_certificacao FOREIGN KEY (id_profissional) 
        REFERENCES profissional(id_profissional) ON DELETE CASCADE
);

CREATE INDEX idx_certificacoes_profissional ON certificacoes(id_profissional);


CREATE TABLE educacao (
    id_educacao SERIAL,
    id_profissional INT NOT NULL,
    instituicao VARCHAR(150),
    curso VARCHAR(150),
    grau_academico VARCHAR(100),
    ano_inicio DATE DEFAULT CURRENT_DATE,
    ano_conclusao DATE,

    CONSTRAINT pk_educacao PRIMARY KEY (id_educacao),
    CONSTRAINT fk_profissional_educacao FOREIGN KEY (id_profissional) 
        REFERENCES profissional(id_profissional) ON DELETE CASCADE
);
CREATE INDEX idx_educacao_profissional ON educacao(id_profissional);

CREATE TYPE nivel_fluencia AS ENUM ('Básico', 'Intermediário', 'Avançado', 'Nativo');

CREATE TABLE idiomas (
    id_idioma SERIAL,
    id_profissional INT NOT NULL,
    idioma VARCHAR(100),
    nivel_fluencia nivel_fluencia,

    CONSTRAINT pk_idioma PRIMARY KEY (id_idioma),
    CONSTRAINT fk_profissional_idioma FOREIGN KEY (id_profissional) 
        REFERENCES profissional(id_profissional) ON DELETE CASCADE
);

CREATE INDEX idx_idiomas_profissional ON idiomas(id_profissional);

CREATE TABLE projetos (
    id_projeto SERIAL,
    id_profissional INT NOT NULL,
    nome_projeto VARCHAR(150),
    descricao TEXT,
    tecnologias_utilizadas TEXT[],
    link_projeto VARCHAR(255),

    CONSTRAINT pk_projeto PRIMARY KEY (id_projeto),
    CONSTRAINT fk_profissional_projeto FOREIGN KEY (id_profissional) 
        REFERENCES profissional(id_profissional) ON DELETE CASCADE
);

CREATE INDEX idx_projetos_profissional ON projetos(id_profissional);