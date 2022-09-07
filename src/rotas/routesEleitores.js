import Router from 'express';

// importando validações
import EleitorValidator from '../middlewares/EleitorValidator';
import ValidateSession from '../middlewares/ValidateSession'


//importando controllers para Juízes
import CreateEleitorController from '../app/controllers/Eleitores/CreateEleitorController';
import ListAllEleitorController from '../app/controllers/Eleitores/ListAllEleitorController';
import UpdateEleitorController from '../app/controllers/Eleitores/UpdateEleitorController';
import DeleteEleitorController from '../app/controllers/Eleitores/DeleteEleitorController';
import EleitorValidator from '../middlewares/EleitorValidator';

// instanciando objetos do crud de Juízes
const createEleitorController = new CreateEleitorController();
const deleteEleitorController = new DeleteEleitorController();
const updateEleitorController = new UpdateEleitorController();
const listAllEleitorController = new ListAllEleitorController();

const routesEleitor = new Router();

// Rota para juízes
routesEleitor.get('/usuarios/:usuario_id/eleitores', (req, res) => listAllEleitorController.listOne(req, res));

routesEleitor.get('/usuarios/eleitores', (req, res) => listAllEleitorController.listAll(req, res));

routesEleitor.post('/usuarios/:usuario_id/eleitores', ValidateSession ,EleitorValidator, (req,res) => createEleitorController.create(req, res));

routesEleitor.put('/usuarios/:usuario_id/eleitores/:id', EleitorValidator, (req, res) => updateEleitorController.update(req, res));

routesEleitor.delete('/usuarios/:usuario_id/eleitores/:id', (req, res) => deleteEleitorController.delete(req, res));

export default routesEleitor;