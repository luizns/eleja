import Router from 'express';

// importando validações
import RegistroVotoValidator from '../middlewares/RegistroVotoValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para RegistroVoto
import CreateRegistroVotoController from '../app/controllers/Votos/RegistroVotos/CreateRegistroVotoController';
import ListAllRegistroVotoController from '../app/controllers/Votos/RegistroVotos/ListAllRegistroVotoController';
import UpdateRegistroVotoController from '../app/controllers/Votos/RegistroVotos/UpdateRegistroVotoController';
import DeleteRegistroVotoController from '../app/controllers/Votos/RegistroVotos/DeleteRegistroVotoController';
import RegistroVotoValidator from '../middlewares/RegistroVotoValidator';

// instanciando objetos do crud de RegistroVoto
const createRegistroVotoController = new CreateRegistroVotoController();
const deleteRegistroVotoController = new DeleteRegistroVotoController();
const updateRegistroVotoController = new UpdateRegistroVotoController();
const listAllRegistroVotoController = new ListAllRegistroVotoController();

const routesRegistroVoto = new Router();

// Rota para RegistroVoto
routesRegistroVoto.get('/registrovotos', (req, res) => listAllRegistroVotoController.listAll(req, res));

routesRegistroVoto.post('/registrovotos', RegistroVotoValidator, (req,res) => createRegistroVotoController.create(req, res));

routesRegistroVoto.put('/registrovotos/:id', IndexValidator, RegistroVotoValidator, (req, res) => updateRegistroVotoController.update(req, res));

routesRegistroVoto.delete('/registrovotos/:id', IndexValidator, (req, res) => deleteRegistroVotoController.delete(req, res));

export default routesRegistroVoto;