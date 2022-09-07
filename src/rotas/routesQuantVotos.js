import Router from 'express';

// importando validações
import QuantVotoValidator from '../middlewares/QuantVotoValidator';


//importando controllers para QuantVoto
import CreateQuantVotoController from '../app/controllers/Votos/QuantVotos/CreateQuantVotoController';
import ListAllQuantVotoController from '../app/controllers/Votos/QuantVotos/ListAllQuantVotoController';
import UpdateQuantVotoController from '../app/controllers/Votos/QuantVotos/UpdateQuantVotoController';
import DeleteQuantVotoController from '../app/controllers/Votos/QuantVotos/DeleteQuantVotoController';
import QuantVotoValidator from '../middlewares/QuantVotoValidator';

// instanciando objetos do crud de QuantVoto
const createQuantVotoController = new CreateQuantVotoController();
const deleteQuantVotoController = new DeleteQuantVotoController();
const updateQuantVotoController = new UpdateQuantVotoController();
const listAllQuantVotoController = new ListAllQuantVotoController();

const routesQuantVoto = new Router();

// Rota para QuantVoto
routesQuantVoto.get('/quantvotos', (req, res) => listAllQuantVotoController.listAll(req, res));

routesQuantVoto.post('/quantvotos', QuantVotoValidator, (req,res) => createQuantVotoController.create(req, res));

routesQuantVoto.put('/quantvotos/:id', QuantVotoValidator, (req, res) => updateQuantVotoController.update(req, res));

routesQuantVoto.delete('/quantvotos/:id', (req, res) => deleteQuantVotoController.delete(req, res));

export default routesQuantVoto;