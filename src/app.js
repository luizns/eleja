import express from 'express';
import db from "./database";


import routesUsuarios from './rotas/routesUsuarios';
import routesJuizes from './rotas/routesJuizes';
import routesCandidatos from './rotas/routesCandidatos';
import routesPartidos from './rotas/routesPartidos';
import routesEleitores from './rotas/routesEleitores';
import routesEnderecos from './rotas/routesEnderecos';
import routesZonas from './rotas/routesZonas';
import routesQuantVotos from './rotas/routesQuantVotos';
import routesRegistroVotos from './rotas/routesRegistroVotos';
import routesVotos from './rotas/routesVotos';
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
    this.routesQuantVotos();
    this.routesRegistroVotos();
    this.routesVotos();
  }

  middlewares() {
    this.server.use(express.json());
  }


    routesUsuarios() {
        this.server.use(routesUsuarios);
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

  routesQuantVotos() {
    this.server.use(routesQuantVotos);
}
  routesRegistroVotos(){
    this.server.use(routesRegistroVotos);
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
