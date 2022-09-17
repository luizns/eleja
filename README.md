<p align="center">
<img src="https://user-images.githubusercontent.com/23271567/179368939-835fa1c2-ac62-4352-bd7d-ec066acd78ae.jpg" width="700" height="300"/>
</p>

# Projeto Integrador

<h4> iFood  | Digital House |  Potência Tech </h4> 
 

<img align="left" src="https://user-images.githubusercontent.com/23271567/189177608-81a0ef7b-f5ab-4be3-8510-2e6d102c2b54.png" width="70" height="70" />

<img align="left" src="https://user-images.githubusercontent.com/23271567/189177630-8bd74fc6-b123-4ea7-ae13-4b3ba00c04b8.png" width="70" height="70" />


 <img src="https://user-images.githubusercontent.com/23271567/189163612-1624afff-888b-4375-8591-aa66578955b4.png" />


## <Elej@>

### Sobre o projeto


<p>  O objetivo do presente projeto está voltado para o desenvolvimento de uma API que
possibilitará o voto eletrônico para as eleições gerais, viabilizando o voto autenticado e
direto através da internet. O sistema será acessado via web, através do dispositivo do eleitor
que deverá efetuar cadastro prévio no mesmo com os dados devidamente validados nos
sistemas do TRE e TSE. O voto eletrônico digital e remoto facilitará o acesso ao exercício
do direito máximo à democracia, possibilitando alcance para quem tem dificuldade de
locomoção, pessoas acamadas, pessoas que residem em zona rural com limitações físicas,
de saúde ou ainda para o eleitor que não quer se abster do conforto de sua casa para
exercer o seu direito constitucional.
</p>

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
- [Contribuidores](#contribuidores)

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


[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Requisi%C3%A7%C3%B5es%20Eleja&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fluizns%2Feleja%2Fdevelop%2FInsomnia_2022-09-03.json)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9a37e77930b57f72fa2a?action=collection%2Fimport)

Todas as rotas você pode importar para o insomnia ou postman para testar-la!


## Contribuidores: 

<br >
Todos os contribuidores do projetos:

<table>
<tr>
    <td align="center"><a href="https://github.com/rodriigolima"><img src="https://avatars.githubusercontent.com/u/23271567?v=4" width="100px;" alt=""/><br /><sub><b>Rodrigo Moreira Lima</b></sub></a><br /></td> 
    <td align="center"><a href="https://github.com/dsfilho"><img src="https://avatars.githubusercontent.com/u/99821361?v=4" width="100px;" alt=""/><br /><sub><b>Daniel dos Santos Filho</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/kcildo"><img src="https://avatars.githubusercontent.com/u/56267053?v=4" width="100px;" alt=""/><br /><sub><b>Acácio Novoa Monteiro</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/ubirajaratamer"><img src="https://avatars.githubusercontent.com/u/104770933?v=4" width="100px;" alt=""/><br /><sub><b>Ubirajara Tamer Pinto Júnior</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/luizns"><img src="https://avatars.githubusercontent.com/u/65914531?v=4" width="100px;" alt=""/><br /><sub><b>Luiz Nascimento da Silva</b></sub></a><br /></td>
   <td align="center"><a href="https://github.com/jaxolv"><img src="https://avatars.githubusercontent.com/u/92948351?v=4" width="100px;" alt=""/><br /><sub><b>Jackson de Oliveira</b></sub></a><br /></td>
</table>
