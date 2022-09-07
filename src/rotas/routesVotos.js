import Router from 'express';

// importando validações
// import VotoValidator from '../middlewares/VotoValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para Voto
import CreateVotoController from '../app/controllers/Votos/CreateVotoController';
import ListVotosController from '../app/controllers/Votos/ListVotosController';
import CreateRegistroVotoController from '../app/controllers/Votos/RegistroVotos/CreateRegistroVotoController'
import ListAllRegistroVotoController from '../app/controllers/Votos/RegistroVotos/ListAllRegistroVotoController'
import ListAllQuantVotoController from '../app/controllers/Votos/QuantVotos/ListAllQuantVotoController'

// instanciando objetos do crud de Voto
const createVotoController = new CreateVotoController();
const listVotosController = new ListVotosController();
const createRegistroVotoController = new CreateRegistroVotoController();
const listAllRegistroVotoController = new ListAllRegistroVotoController();
const listAllQuantVotoController = new ListAllQuantVotoController();

const routes = new Router();

// Rota para Voto
routes.post('/votos_registro', (req, res) =>
    createRegistroVotoController.create(req, res)
);
routes.get('/votos_registro', (req, res) =>
    listAllRegistroVotoController.listAll(req, res)
);
routes.get('votos-quantidade', (req, res) =>
    listAllQuantVotoController.show(req, res)
);
routes.post('/votos', (req, res) =>
    createVotoController.create(req, res)
);
routes.get('/votos', (req, res) =>
    listVotosController.list(req, res)
);

export default routes;
