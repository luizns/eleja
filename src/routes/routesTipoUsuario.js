import Router from 'express';

//importando controllers para TipoUsuario
import CreateTipoUsuarioController from '../app/controllers/TipoUsuarios/CreateTipoUsuarioController';
import ListAllTipoUsuarioController from '../app/controllers/TipoUsuarios/ListAllTipoUsuarioController';
import UpdateTipoUsuarioController from '../app/controllers/TipoUsuarios/UpdateTipoUsuarioController';
import DeleteTipoUsuarioController from '../app/controllers/TipoUsuarios/DeleteTipoUsuarioController';

// instanciando objetos do crud de TipoUsuario
const createTipoUsuarioController = new CreateTipoUsuarioController();
const deleteTipoUsuarioController = new DeleteTipoUsuarioController();
const updateTipoUsuarioController = new UpdateTipoUsuarioController();
const listAllTipoUsuarioController = new ListAllTipoUsuarioController();

const routes = new Router();

// Rotas para TipoUsuario
routes.get('/tipoUsuarios', (req, res) =>
    listAllTipoUsuarioController.listAll(req, res)
);
routes.post('/tipoUsuarios', (req, res) =>
    createTipoUsuarioController.create(req, res)
);
routes.put('/tipoUsuarios/:id',  (req, res) =>
    updateTipoUsuarioController.update(req, res)
);
routes.delete('/tipoUsuarios/:id', (req, res) =>
    deleteTipoUsuarioController.delete(req, res)
);

export default routes;