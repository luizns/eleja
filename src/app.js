import express from 'express';

import routesUsuarios from './rotas/routesUsuarios';
import routesJuizes from './rotas/routesJuizes';
import routesCandidatos from './rotas/routesCandidatos';
import routesPartidos from './rotas/routesPartidos';
import routesEleitores from './rotas/routesEleitores';
import routesEnderecos from './rotas/routesEnderecos';
class App {
    constructor() {
        this.server = express();
        

        this.middlewares();
        
        this.routesUsuarios();
        this.routesJuizes();
        this.routesCandidatos();
        this.routesPartidos();
        this.routesEleitores();
        this.routesEnderecos();
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
}

export default new App().server;
