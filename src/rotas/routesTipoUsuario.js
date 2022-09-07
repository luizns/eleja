import Router from 'express';

// importando validações
import TipoUsuarioValidator from '../middlewares/TipoUsuarioValidator';

//importando controllers para TipoUsuario
import CreateTipoUsuarioController from '../app/controllers/TipoUsuarios/CreateTipoUsuarioController';
import ListAllTipoUsuarioController from '../app/controllers/TipoUsuarios/ListAllTipoUsuarioController';
import DeleteTipoUsuarioController from '../app/controllers/TipoUsuarios/DeleteTipoUsuarioController';

// instanciando objetos do crud de TipoUsuario
const createTipoUsuarioController = new CreateTipoUsuarioController();
const deleteTipoUsuarioController = new DeleteTipoUsuarioController();
const listAllTipoUsuarioController = new ListAllTipoUsuarioController();

const routesTipoUsuario = new Router();

// Rota para TipoUsuario
routesTipoUsuario.get('/tipoUsuarios', (req, res) => listAllTipoUsuarioController.listAll(req, res));

routesTipoUsuario.post('/tipoUsuarios', TipoUsuarioValidator, (req,res) => createTipoUsuarioController.create(req, res));

routesTipoUsuario.delete('/tipoUsuarios/:id', (req, res) => deleteTipoUsuarioController.delete(req, res));

export default routesTipoUsuario;