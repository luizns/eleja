import Router from 'express';

// importando validações
import EleitorValidator from '../middlewares/EleitorValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para Juízes
import CreateEleitorController from '../app/controllers/Eleitores/CreateEleitorController';
import ListEleitorController from '../app/controllers/Eleitores/ListEleitorController';
import UpdateEleitorController from '../app/controllers/Eleitores/UpdateEleitorController';
import DeleteEleitorController from '../app/controllers/Eleitores/DeleteEleitorController';
import EleitorValidator from '../middlewares/EleitorValidator';

// instanciando objetos do crud de Juízes
const createEleitorController = new CreateEleitorController();
const deleteEleitorController = new DeleteEleitorController();
const updateEleitorController = new UpdateEleitorController();
const listEleitorController = new ListEleitorController();

const routesEleitor = new Router();

// Rota para juízes
routesEleitor.get('/eleitores', (req, res) => listEleitorController.index(req, res));

routesEleitor.post('/eleitores', /* EleitorValidator, */ (req,res) => createEleitorController.create(req, res));

routesEleitor.put('/eleitores/:id', IndexValidator, EleitorValidator, (req, res) => updateEleitorController.update(req, res));

routesEleitor.delete('/eleitores/:id', IndexValidator, (req, res) => deleteEleitorController.delete(req, res));

export default routesEleitor;