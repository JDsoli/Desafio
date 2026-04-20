# Node.js Task API 🚀

Uma API robusta para gestão de tarefas, desenvolvida durante o desafio de Node.js. O projeto foca no uso de módulos nativos do Node.js, manipulação de Streams e persistência de dados em ficheiros JSON.

## 🛠️ Tecnologias e Conceitos
- **Node.js**: Runtime principal.
- **ESModules**: Utilização de `import/export`.
- **HTTP Nativo**: Criação do servidor sem frameworks (como Express).
- **Streams**: Processamento de dados por "pedaços" (chunks) para eficiência de memória.
- **Regex**: Implementação de rotas dinâmicas e captura de parâmetros.
- **CSV Parse**: Importação massiva de dados via ficheiro.

## 📋 Funcionalidades (CRUD)
- [x] **POST `/tasks`**: Cria uma nova tarefa.
- [x] **GET `/tasks`**: Lista todas as tarefas (suporta filtros via Query Params por `title` ou `description`).
- [x] **PUT `/tasks/:id`**: Atualiza o título ou descrição de uma tarefa.
- [x] **DELETE `/tasks/:id`**: Remove uma tarefa pelo ID.
- [x] **PATCH `/tasks/:id/complete`**: Altera o estado de conclusão (toggle) da tarefa.

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/teu-usuario/nodejs-task-api.git](https://github.com/JDsoli/nodejs-task-api.git)