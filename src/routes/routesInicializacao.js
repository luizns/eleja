import Router from 'express';

import InicializarUrnaController from '../app/controllers/InicializarUrna/InicializarUrnaController';

const inicializarUrnaController = new InicializarUrnaController();

const routes = new Router();

routes.get('/inicializar', (req, res) =>
    inicializarUrnaController.list(req, res)
);

export default routes;
