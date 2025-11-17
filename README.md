# PROJETO INTEGRADOR: UNI HEALTH
## - Desenvolvimento de Sistemas Web Modularizável

O **Uni Health** é um projeto desenvolvido como parte do Curso de Tecnologia em Análise e Desenvolvimento de Sistemas do SENAC, focado em oferecer suporte ao bem-estar emocional de estudantes universitários.

### Membros do Grupo

| Nome                             |
| :------------------------------- |
| Lucas Vieira da Silva            |
| Nathan Riccelle Coimbra Oliveira |
| Vandilson Fabio de Lima          |
| Vivian Farias da Silva           |
| Weber Gonçalves da Silva         |

**Orientador:** Prof. Enoque Leal

---

## Visão Geral do Produto

O **Uni Health** é um aplicativo web modularizável, projetado como um suporte prático e acessível para os desafios emocionais da vida acadêmica (ansiedade, estresse, sobrecarga, isolamento). O projeto visa contribuir para a prevenção de crises psicológicas e redução do abandono de cursos[cite: 30].

### Principais Funcionalidades

As funcionalidades foram pensadas para atender a perfis variados (Personas) e incluem:

- **Check-in Emocional Diário:** Registro rápido de humor para monitoramento e feedback[cite: 52].
- **Exercícios Guiados:** Áudios e vídeos de respiração, meditação e relaxamento[cite: 54].
- **Chat de Apoio Anônimo:** Comunidade segura para desabafo e troca de experiências ou acesso a psicólogos parceiros[cite: 55].
- **Gamificação:** Recompensas e conquistas para incentivar a manutenção de práticas de bem-estar[cite: 56].

---

## Arquitetura e Tecnologias

O projeto é dividido em **Frontend** (Interface do Usuário) e **Backend** (Servidor/API) para garantir a modularização.

### Frontend

Single Page Application (SPA) desenvolvida com **React.js**.

- **Tecnologias Principais:** React.js, `react-router-dom`, Context API (`UserProvider`) para gerenciamento de estado e autenticação.
- **Rotas Definidas (src/App.js):** `/`, `/home`, `/mural`, `/respiracao`, `/conquistas`, `/recomendados`.

### Backend

API RESTful construída com Node.js e o framework Express.

- **Tecnologias Principais:** Node.js, Express.js, Mongoose (MongoDB), JWT (JSON Web Tokens).
- **Status de Desenvolvimento:** A arquitetura base e a autenticação estão implementadas, demonstrando o conhecimento sobre segurança da aplicação.
  - **Funcionalidades Concluídas:** Conexão com o **MongoDB**, rota `/login` e o _middleware_ de segurança `verificaToken` para proteção de rotas futuras.
  - **Porta:** Configurado para rodar na porta `3001`.

---

## Como Rodar o Projeto

Para configurar e executar o projeto, siga os passos para o Backend e, em seguida, para o Frontend.

### 1. Configuração do Backend (API)

1.  **Pré-requisitos:** Node.js e MongoDB (local ou remoto).
2.  **Variáveis de Ambiente:** Crie um arquivo `.env` na raiz do diretório **Backend** com as seguintes variáveis:
    ```
    MONGO_URL=<Sua string de conexão com o MongoDB>
    SECRET=<Uma chave secreta para o JWT>
    ```
3.  **Instalação de Dependências:** No diretório **Backend**, execute:
    ```bash
    npm install
    ```
4.  **Inicialização do Servidor:**
    ```bash
    npm start # ou o comando configurado para inicializar o servidor Express
    ```
    O servidor será iniciado na porta 3001 e fará a conexão com o banco de dados.

### 2. Configuração do Frontend (App)

1.  **Instalação de Dependências:** No diretório **Frontend**, execute:
    ```bash
    npm install
    ```
2.  **Execução do Aplicativo:**
    ```bash
    npm start
    ```
    O aplicativo será iniciado em modo de desenvolvimento.
    _Acesse:_ **`http://localhost:3000`** para visualizar a tela de Login.

---
