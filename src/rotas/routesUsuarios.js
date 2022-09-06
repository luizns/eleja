import Router from 'express';

// importando validações
import UsuarioValidator from '../middlewares/UsuarioValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para usuários
import CreateUsuarioController from '../app/controllers/Usuarios/CreateUsuarioController';
import ListAllUsuarioController from '../app/controllers/Usuarios/ListAllUsuarioController';
import UpdateUsuarioController from '../app/controllers/Usuarios/UpdateUsuarioController';
import DeleteUsuarioController from '../app/controllers/Usuarios/DeleteUsuarioController';
import UsuarioValidator from '../middlewares/UsuarioValidator';

// instanciando objetos do crud de usuários
const createUsuarioController = new CreateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const listAllUsuarioController = new ListAllUsuarioController();

const routesUsuario = new Router();

// Rota para usuários
routesUsuario.get('/usuarios', (req, res) => listAllUsuarioController.listAll(req, res));

routesUsuario.post('/usuarios', UsuarioValidator, (req,res) => createUsuarioController.create(req, res));

routesUsuario.put('/usuarios/:id', IndexValidator, UsuarioValidator, (req, res) => updateUsuarioController.update(req, res));

routesUsuario.delete('/usuarios/:id', IndexValidator, (req, res) => deleteUsuarioController.delete(req, res));

export default routesUsuario;