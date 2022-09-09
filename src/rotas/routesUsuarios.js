import Router from 'express';

//Importando a Seção
import SessionController from '../app/controllers/auth/SessionController'

// importando validações
import UsuarioValidator from '../middlewares/UsuarioValidator';

//importando controllers para usuários
import CreateUsuarioController from '../app/controllers/Usuarios/CreateUsuarioController';
import ListAllUsuarioController from '../app/controllers/Usuarios/ListAllUsuarioController';
import UpdateUsuarioController from '../app/controllers/Usuarios/UpdateUsuarioController';
import DeleteUsuarioController from '../app/controllers/Usuarios/DeleteUsuarioController';

// instanciando objetos do crud de usuários
const createUsuarioController = new CreateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const listAllUsuarioController = new ListAllUsuarioController();

const routesUsuario = new Router();

routesUsuario.post("/session", (req, res) => SessionController.create(req, res));

// Rota para usuários
routesUsuario.get('/usuarios', (req, res) => listAllUsuarioController.listAll(req, res));

routesUsuario.get('/usuarios', (req, res) => listAllUsuarioController.FindUsuario(req, res));

routesUsuario.post('/usuarios', UsuarioValidator, (req,res) => createUsuarioController.create(req, res));

routesUsuario.put('/usuarios/:id', UsuarioValidator, (req, res) => updateUsuarioController.update(req, res));

routesUsuario.delete('/usuarios/:id', (req, res) => deleteUsuarioController.delete(req, res));


export default routesUsuario;