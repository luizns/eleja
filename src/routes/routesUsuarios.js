import Router from 'express';

// importando validações
import UsuarioValidator from '../middlewares/UsuarioValidator';

//importando controllers para usuários
import CreateUsuarioController from '../app/controllers/Usuarios/CreateUsuarioController';
import ListAllUsuarioController from '../app/controllers/Usuarios/ListAllUsuarioController';
import UpdateUsuarioController from '../app/controllers/Usuarios/UpdateUsuarioController';
import DeleteUsuarioController from '../app/controllers/Usuarios/DeleteUsuarioController';
import usuarioValidator from '../middlewares/UsuarioValidator';

// instanciando objetos do crud de usuários
const createUsuarioController = new CreateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const listAllUsuarioController = new ListAllUsuarioController();

const routesUsuario = new Router();

// Rota para usuários
routesUsuario.get('/usuarios', (req, res) => listAllUsuarioController.listAll(req, res));

routesUsuario.post('/usuarios', usuarioValidator, (req,res) => createUsuarioController.create(req, res));

routesUsuario.put('/usuarios/:idUsuario', usuarioValidator, (req, res) => updateUsuarioController.update(req, res));

routesUsuario.delete('/usuarios/:idUsuario', (req, res) => deleteUsuarioController.delete(req, res));

export default routesUsuario;