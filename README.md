# O que contém nesta aplicação ?
- Princípios SOLID
-- useCases, Repository
- Design Patterns
-- Singleton

# Aplicação roda em docker
- Para criar a imagem/instalar: <b>docker build -t rentx .</b>
- Onde 'rentx' é o nome que quero dar a aplicação que será rodada e o '.' é referente à localização do dockerfile, que neste caso, está na raiz do projeto.
- Para verificar quais containers estão rodando: <b>docker ps</b>
- Para rodar a aplicação: <b>docker run -p 3333:3333 rentx</b>

# Usando o docker compose
- Para rodar a aplicação com o docker compose: <b>docker-compose up</b>
- Com o 'docker-compose up', precisamos manter o processo rodando no terminal para que o docker-compose esteja rodando. Caso finalizemos o processo, o docker compose para de rodar.
- Para rodar o docker compose em background, ou seja, sem a necessidade de manter o processo rodando no terminal, usar <b>docker-compose up -d</b>
- Para verificar os logs da aplicação (inclusive os console.log que forem criados para debug da aplicação): <b>docker logs rentx -f</b>

# Migrations
- yarn typeorm migration:create NomeDaMigration
- yarn typeorm migration:run
- yarn typeorm migration:revert