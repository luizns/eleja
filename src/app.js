import express from 'express';
import routesUsers from './rotas/routesUsers';
import routesJudges from './rotas/routesJudges';
import routesCandidatos from './rotas/routesCandidatos';
import routesPartidos from './rotas/routesPartidos';
class App {
    constructor() {
        this.server = express();
        

        this.middlewares();
        
        this.routesUsers();
        this.routesJudges();
        this.routesCandidatos();
        this.routesPartidos();
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

    routesPartidos() {
        this.server.use(routesPartidos);
    }
}

export default new App().server;
