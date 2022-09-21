import Router from 'express';

// importando validações
import EleitorValidator from '../middlewares/EleitorValidator';

//importando controllers para eleitores
import CreateEleitorController from '../app/controllers/Eleitores/CreateEleitorController';
import ListEleitorController from '../app/controllers/Eleitores/ListEleitorController';
import UpdateEleitorController from '../app/controllers/Eleitores/UpdateEleitorController';
import DeleteEleitorController from '../app/controllers/Eleitores/DeleteEleitorController';
import eleitorValidator from '../middlewares/EleitorValidator';

// instanciando objetos do crud de eleitores
const createEleitorController = new CreateEleitorController();
const deleteEleitorController = new DeleteEleitorController();
const updateEleitorController = new UpdateEleitorController();
const listEleitorController = new ListEleitorController();

const routesEleitor = new Router();

// Rota para eleitores
routesEleitor.get('/eleitores', (req, res) => listEleitorController.index(req, res));

routesEleitor.post('/eleitores',  (req,res) => createEleitorController.create(req, res));

routesEleitor.put('/eleitores/:idEleitor',  eleitorValidator, (req, res) => updateEleitorController.update(req, res));

routesEleitor.delete('/eleitores/:idEleitor', (req, res) => deleteEleitorController.delete(req, res));

export default routesEleitor;