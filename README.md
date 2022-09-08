<p align="center">
<img src="https://user-images.githubusercontent.com/23271567/179368939-835fa1c2-ac62-4352-bd7d-ec066acd78ae.jpg" width="700" height="300"/>
</p>

# Projeto Integrador

<h4> iFood  | Digital House |  Potência Tech </h4> 
 

<img align="left" src="https://user-images.githubusercontent.com/23271567/189177608-81a0ef7b-f5ab-4be3-8510-2e6d102c2b54.png" width="70" height="70" />

<img align="left" src="https://user-images.githubusercontent.com/23271567/189177630-8bd74fc6-b123-4ea7-ae13-4b3ba00c04b8.png" width="70" height="70" />


 <img src="https://user-images.githubusercontent.com/23271567/189163612-1624afff-888b-4375-8591-aa66578955b4.png" />


## <Elej@>

Discentes: 
- [Acácio Novoa Monteiro](https://github.com/kcildo)
- [Daniel dos Santos Filho](https://github.com/dsfilho)
- [Jackson de Oliveira Pereira](https://github.com/jaxolv)
- [Luiz Nascimento da Silva](https://github.com/luizns)
- [Rodrigo Moreira Lima](https://github.com/rodriigolima)
- [Ubirajara Tamer Pinto Júnior](https://github.com/ubirajaratamer)


## Manual de Instalação

Clone o repositorio:

```bash
git clone https://github.com/luizns/eleja.git
cd eleja
```

Instale as dependências:

```bash
npm install
```

Set as variáveis de environment:

```bash
cp .env.example .env
# open .env and modify the environment variables
```

## Índice

- [Comandos](#comandos)
- [Variáveis de Environment](#variáveis-de-environment)
- [Estrutura do projeto](#estrutura-do-projeto)
- [API Endpoints](#api-endpoints)

## Comandos

Rodando em desenvolvimento:

```bash
npm start
```

## Variáveis de Environment

As variáveis de environment pode ser encontradas e modificadas no arquivo `.env`.

```bash
#PORTA DO SERVIDOR

API_PORT= # default 3000

#VARIAVEIS DE AMBIENTE MYSQL

##PORTA DO SERVIDOR
API_PORT=

##VARIAVEIS DE AMBIENTE MYSQL
DB_TYPE=mysql
DB_PORT=3306
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=

#HASH

# CRIPTOGRAFIA DE SENHA
PASSWORD_SALT=

#JWT
JWT_PRIVATE_KEY=
```
## Estrutura do projeto

```

src\
 |--config\         # Environment variables and configuration
 |--\app\controllers\    # Controllers
 |--\app\models\         # Mongoose models
 |--\app\services\       # Business logic
 |--middlewares\    # Custom express middlewares
 |--\database\index.js   # 
 |--routes\         # Routes
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 
```

## API Endpoints

Lista de routes disponíveis:


**Rotas do Usuário**:\
`POST /usuarios` - Create a user\
`GET  /usuarios` - Get all users\
`PUT /usuarios/:id` - Update user\
`DELETE /usuarios/:id` - Delete user\


## Insonmia Import


[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Eleja%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fluizns%2Feleja%2Frodrigo%2FInsomnia_2022-07-16.json)
