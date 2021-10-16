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
- yarn typeorm migration:create -n NomeDaMigration
- yarn typeorm migration:run
- yarn typeorm migration:revert

# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.


**RN** 
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF** 
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo - nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo - nome da marca
- Deve ser possível listar todos os carros disponíveis pelo - nome do carro

**RN**
- O usuário não precisar estar logado no sistema.


# Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro


**RN**
- Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


# Alugel de carro

**RF**
- Deve ser possível cadastrar um aluguel


**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro
- O usuário deve estar logado na aplicação
- Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível


# Devolução de carro 

**RF**
- Deve ser possível realizar a devolução de um carro

**RN**
- Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do - aluguel. 
- Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação


# Listagem de Alugueis para usuário

**RF**
- Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
- O usuário deve estar logado na aplicação


# Recuperar Senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas
