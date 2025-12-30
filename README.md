wallpapers collection that i have used on my computer.

3. Instalação
No terminal, instale as dependências do projeto:

`npm run install`

4. Preparar o Banco de Dados
Com o Docker rodando, execute as migrações do Prisma para criar as tabelas no PostgreSQL:

`npm run prisma:migrate`

1. Iniciar o Projeto
Para subir o banco de dados e o servidor simultaneamente, utilize o comando mestre:

`npm run start:all`

O servidor estará rodando em: http://localhost:3000