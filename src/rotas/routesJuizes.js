import Router from 'express';

// importando validações
import JuizValidator from '../middlewares/JuizValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para Juízes
import CreateJuizController from '../app/controllers/Juizes/CreateJuizController';
import ListAllJuizController from '../app/controllers/Juizes/ListAllJuizController';
import UpdateJuizController from '../app/controllers/Juizes/UpdateJuizController';
import DeleteJuizController from '../app/controllers/Juizes/DeleteJuizController';
import JuizValidator from '../middlewares/JuizValidator';

// instanciando objetos do crud de Juízes
const createJuizController = new CreateJuizController();
const deleteJuizController = new DeleteJuizController();
const updateJuizController = new UpdateJuizController();
const listAllJuizController = new ListAllJuizController();

const routesJuiz = new Router();

// Rota para juízes
routesJuiz.get('/juizes', (req, res) => listAllJuizController.listAll(req, res));

routesJuiz.post('/juizes', JuizValidator, (req,res) => createJuizController.create(req, res));

routesJuiz.put('/juizes/:id', IndexValidator, JuizValidator, (req, res) => updateJuizController.update(req, res));

routesJuiz.delete('/juizes/:id', IndexValidator, (req, res) => deleteJuizController.delete(req, res));

export default routesJuiz;