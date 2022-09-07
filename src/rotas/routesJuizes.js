import Router from 'express';

// importando validações
import JuizValidator from '../middlewares/JuizValidator';


//importando controllers para Juízes
import CreateJuizController from '../app/controllers/Juizes/CreateJuizController';
import ListAllJuizController from '../app/controllers/Juizes/ListAllJuizController';
import UpdateJuizController from '../app/controllers/Juizes/UpdateJuizController';
import DeleteJuizController from '../app/controllers/Juizes/DeleteJuizController';

// instanciando objetos do crud de Juízes
const createJuizController = new CreateJuizController();
const deleteJuizController = new DeleteJuizController();
const updateJuizController = new UpdateJuizController();
const listAllJuizController = new ListAllJuizController();

const routesJuiz = new Router();

// Rota para juízes
routesJuiz.get('/usuarios/:usuario_id/juizes', (req, res) => listAllJuizController.listOne(req, res));

routesJuiz.get('/usuarios/juizes', (req, res) => listAllJuizController.listAll(req, res));

routesJuiz.post('/usuarios/:usuario_id/juizes', JuizValidator, (req,res) => createJuizController.create(req, res));

routesJuiz.put('/usuarios/:usuario_id/juizes/:id', JuizValidator, (req, res) => updateJuizController.update(req, res));

routesJuiz.delete('/usuarios/:usuario_id/juizes/:id', (req, res) => deleteJuizController.delete(req, res));

export default routesJuiz;