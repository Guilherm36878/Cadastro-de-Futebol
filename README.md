# Cadastro de Jogadores

## Descrição

Sistema simples para cadastro de times e jogadores.

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript no front-end, Node.js com Express no back-end e PostgreSQL como banco de dados.

## Funcionalidades

* Cadastro de times
* Listagem de times
* Cadastro de jogadores
* Listagem de jogadores
* Associação de jogadores a um time

### Front-end

* HTML
* CSS
* JavaScript

### Back-end

* Node.js
* Express
* CORS

### Banco de Dados

* PostgreSQL

## Estrutura do Banco de Dados

```sql
CREATE TABLE times (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL
);

CREATE TABLE jogadores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  posicao VARCHAR(50) NOT NULL,
  idade INT NOT NULL,
  time_id INT REFERENCES times(id)
);
```

## Como Executar

1. Criar o banco de dados PostgreSQL chamado `futebol`.
2. Executar o script SQL para criar as tabelas.
3. Configurar as credenciais do banco no arquivo `database.js`.
4. Instalar as dependências.
5. Rodar o servidor e estará pronto pra uso

## Autor

João Guilherme
