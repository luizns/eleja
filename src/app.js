import express from 'express';
import routesUsers from './rotas/routesUsers';
import routesJudges from './rotas/routesJudges';
import routesCandidatos from './rotas/routesCandidatos';


class App {
    constructor() {
        this.server = express();
        

        this.middlewares();
        this.routesUsers();
        this.routesJudges();
        this.routesCandidatos();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routesUsers() {
        this.server.use(routesUsers);
    }

    routesJudges() {
        this.server.use(routesJudges);
    }

    routesCandidatos() {
        this.server.use(routesCandidatos);
    }
}

export default new App().server;
