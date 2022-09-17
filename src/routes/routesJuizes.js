import Router from 'express';

// importando validações
import juizValidator from '../middlewares/JuizValidator';
//importando controllers para Juízes
import CreateJuizController from '../app/controllers/Juizes/CreateJuizController';
import ListJuizController from '../app/controllers/Juizes/ListJuizController';
import UpdateJuizController from '../app/controllers/Juizes/UpdateJuizController';
import DeleteJuizController from '../app/controllers/Juizes/DeleteJuizController';
import JuizValidator from '../middlewares/JuizValidator';

// instanciando objetos do crud de Juízes
const createJuizController = new CreateJuizController();
const deleteJuizController = new DeleteJuizController();
const updateJuizController = new UpdateJuizController();
const listJuizController = new ListJuizController();

const routesJuiz = new Router();

// Rota para juízes
routesJuiz.get('/juizes', (req, res) => listJuizController.index(req, res));

routesJuiz.post('/juizes', juizValidator, (req,res) => createJuizController.create(req, res));

routesJuiz.put('/juizes/:idJuiz', juizValidator, (req, res) => updateJuizController.update(req, res));

routesJuiz.delete('/juizes/:idJuiz', (req, res) => deleteJuizController.delete(req, res));

export default routesJuiz;