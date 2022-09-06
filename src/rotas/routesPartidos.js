import Router from 'express';

// importando validações
import PartidoValidator from '../middlewares/PartidoValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para partidos
import CreatePartidoController from '../app/controllers/Partidos/CreatePartidoController';
import ListAllPartidoController from '../app/controllers/Partidos/ListAllPartidoController';
import UpdatePartidoController from '../app/controllers/Partidos/UpdatePartidoController';
import DeletePartidoController from '../app/controllers/Partidos/DeletePartidoController';
import PartidoValidator from '../middlewares/PartidoValidator';

// instanciando objetos do crud de partidos
const createPartidoController = new CreatePartidoController();
const deletePartidoController = new DeletePartidoController();
const updatePartidoController = new UpdatePartidoController();
const listAllPartidoController = new ListAllPartidoController();

const routesPartido = new Router();

// Rota para partidos
routesPartido.get('/partidos', (req, res) => listAllPartidoController.listAll(req, res));

routesPartido.post('/partidos', PartidoValidator, (req,res) => createPartidoController.create(req, res));

routesPartido.put('/partidos/:id', IndexValidator, PartidoValidator, (req, res) => updatePartidoController.update(req, res));

routesPartido.delete('/partidos/:idPartido', IndexValidator, (req, res) => deletePartidoController.delete(req, res));

export default routesPartido;