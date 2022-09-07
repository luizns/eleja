import express from 'express';
import db from "./database";


import routesUsuarios from './rotas/routesUsuarios';
import routesJuizes from './rotas/routesJuizes';
import routesCandidatos from './rotas/routesCandidatos';
import routesPartidos from './rotas/routesPartidos';
import routesEleitores from './rotas/routesEleitores';
import routesEnderecos from './rotas/routesEnderecos';
import routesZonas from './rotas/routesZonas';
import routesVotos from './rotas/routesVotos';
import routesTipoUsuario from './rotas/routesTipoUsuario';
class App {
   constructor() {
    this.server = express();
    this.initializeDatabase();
    this.middlewares();

    this.routesUsuarios();
    this.routesJuizes();
    this.routesCandidatos();
    this.routesPartidos();
    this.routesEleitores();
    this.routesEnderecos();
    this.routesZonas();
    this.routesVotos();
    this.routesTipoUsuario();
  }

  middlewares() {
    this.server.use(express.json());
  }


    routesUsuarios() {
        this.server.use(routesUsuarios);
    }

    routesTipoUsuario() {
        this.server.use(routesTipoUsuario);
    }

    routesJuizes() {
        this.server.use(routesJuizes);
    }

    routesCandidatos() {
        this.server.use(routesCandidatos);
    }

    routesPartidos() {
        this.server.use(routesPartidos);
    }

    routesEleitores() {
        this.server.use(routesEleitores);
    }

    routesEnderecos() {
        this.server.use(routesEnderecos);
    }

    routesZonas() {
      this.server.use(routesZonas);
  }

  routesVotos(){
    this.server.use(routesVotos);
  }

  async initializeDatabase() {
    try {
      await db.authenticate();
      console.log("Conexão com banco realizada com sucesso");
    } catch (error) {
      console.log(
        "Não foi possível conectar ao banco de dados:",
        error.message
      );
    }
  }
}

export default new App().server;
