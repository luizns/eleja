import express from 'express';
import routesUsers from './rotas/routesUsers';
import routesJuizes from './rotas/routesJuizes';
import routesCandidatos from './rotas/routesCandidatos';
import routesPartidos from './rotas/routesPartidos';
import routesEleitores from './rotas/routesEleitores';
class App {
    constructor() {
        this.server = express();
        

        this.middlewares();
        
        this.routesUsers();
        this.routesJuizes();
        this.routesCandidatos();
        this.routesPartidos();
        this.routesEleitores();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routesUsers() {
        this.server.use(routesUsers);
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
}

export default new App().server;
