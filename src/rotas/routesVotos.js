import Router from 'express';

// importando validações
import VotoValidator from '../middlewares/VotoValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para Voto
import CreateVotoController from '../app/controllers/Votos/CreateVotoController';
import ListAllVotoController from '../app/controllers/Votos/ListAllVotoController';
import UpdateVotoController from '../app/controllers/Votos/UpdateVotoController';
import DeleteVotoController from '../app/controllers/Votos/DeleteVotoController';
import VotoValidator from '../middlewares/VotoValidator';

// instanciando objetos do crud de Voto
const createVotoController = new CreateVotoController();
const deleteVotoController = new DeleteVotoController();
const updateVotoController = new UpdateVotoController();
const listAllVotoController = new ListAllVotoController();

const routesVoto = new Router();

// Rota para Voto
routesVoto.get('/votos', (req, res) => listAllVotoController.listAll(req, res));

routesVoto.post('/votos', VotoValidator, (req,res) => createVotoController.create(req, res));

routesVoto.put('/votos/:id', IndexValidator, VotoValidator, (req, res) => updateVotoController.update(req, res));

routesVoto.delete('/votos/:id', IndexValidator, (req, res) => deleteVotoController.delete(req, res));

export default routesVoto;