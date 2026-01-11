Wallpapers collection that i have used on my computer.

### Configuração inicial

1. **No terminal, instale as dependências do projeto:**

```bash
npm run setup
```

2. **Iniciar o Projeto por completo:**

Este comando sobe o banco de dados (Docker), o servidor Node.js e o site React simultaneamente

```bash
npm run dev:full
```

3. **Fazer as migrações necessárias no Banco de Dados:**
```bash
npm run prisma:migrate
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run setup` | Primeiro passo. Instala todas as dependências do projeto (Back e Front). |
| `npm run dev:full` | Uso diário. Sobe o Docker e inicia o Back e o Front juntos. |
| `npm run start:all` | Inicia o Back-end e o Front-end ao mesmo tempo (sem mexer no Docker). |
| `npm run docker:up` | Inicia apenas o contentor da base de dados PostgreSQL.|
| `npm run stop` | Para e remove o contentor do Docker. |
| `npm run prisma:migrate` | Aplica as alterações na base de dados (Migrations). |
| `npx prisma studio` | Para visualizar o banco de dados Prisma |


### Serviços da aplicação

| Serviço | URL | Descrição |
|---------|-----|-----------|
| **Frontend** | [http://localhost:5173](http://localhost:5173) | Interface principal da aplicação |
| **Backend API** | [http://localhost:3000](http://localhost:3000) | BACKEND |
| **Prisma Studio** | [http://localhost:5555](http://localhost:5555) | Visualização do banco de dados Prisma |



