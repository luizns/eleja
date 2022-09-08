![f42e539f-8d83-4f07-9d33-c2cd05587105](https://user-images.githubusercontent.com/23271567/179368939-835fa1c2-ac62-4352-bd7d-ec066acd78ae.jpg)


# Projeto Integrador

 Digital House | Potência Tech | iFood
 
<p align="center" t>
  <img src="https://seeklogo.com/images/I/ifood-logo-F65BEA85BF-seeklogo.com.png" />
</p>

## <Elej@>

Discentes: 
- [Acácio Novoa Monteiro](https://github.com/kcildo)
- [Daniel dos Santos Filho](https://github.com/dsfilho)
- [Jackson de Oliveira Pereira](https://github.com/jaxolv)
- [Luiz Nascimento da Silva](https://github.com/luizns)
- [Rodrigo Moreira Lima](https://github.com/rodriigolima)
- [Ubirajara Tamer Pinto Júnior](https://github.com/ubirajaratamer)


## Manual Installation

Clone the repo:

```bash
git clone https://github.com/luizns/eleja.git
cd eleja
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env
# open .env and modify the environment variables
```

## Table of Contents

- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Commands

Running in development:

```bash
npm start
```

## Environment Variables

The environment variables can be found and modified in the `.env` file.

```bash
#PORTA DO SERVIDOR

API_PORT= # default 3000

#VARIAVEIS DE AMBIENTE MYSQL

DB_TYPE=mysql
DB_PORT= # default 3306
DB_HOST=localhost
DB_USERNAME= # default root
DB_PASSWORD= 
DB_DATABASE=eleja
```
## Project Structure

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

List of available routes:


**User routes**:\
`POST /users` - Create a user\
`GET  /users` - Get all users\
`PUT /users/:id` - Update user\
`DELETE users/:id` - Delete user


## Insonmia Import


[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Eleja%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fluizns%2Feleja%2Frodrigo%2FInsomnia_2022-07-16.json)
