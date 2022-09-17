import Router from 'express';

import ListAllQuantVotoController from '../app/controllers/Votos/QuantVotos/ListAllQuantVotoController'
import CreateQuantidadeVotosController from '../app/controllers/Votos/QuantVotos/CreateQuantidadeVotosController'

const createQuantidadeVotosController = new CreateQuantidadeVotosController();
const listAllQuantVotoController = new ListAllQuantVotoController();

const routesVotos = new Router();

// Rota para Voto
/*routes.post('/votos_registro', (req, res) =>
    createRegistroVotoController.create(req, res)
);
routes.get('/votos_registro', (req, res) =>
    listAllRegistroVotoController.listAll(req, res)
);*/
/*routes.post('/registra_voto_candidato', (req, res) =>
    createVotoController.create(req, res)
);*/
routesVotos.get('/votos_quantidade/', (req, res) =>
    listAllQuantVotoController.listAll(req, res)
); 

routesVotos.post('/registra_voto_candidato', (req, res) =>
createQuantidadeVotosController.create(req, res)
);

export default routesVotos;
