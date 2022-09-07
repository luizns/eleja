import Router from 'express';

// importando validações
import EnderecoValidator from '../middlewares/EnderecoValidator';
import validateSession from '../middlewares/ValidateSession'

//importando controllers para endereco
import CreateEnderecoController from '../app/controllers/Enderecos/CreateEnderecoController';
import ListAllEnderecoController from '../app/controllers/Enderecos/ListAllEnderecoController';
import UpdateEnderecoController from '../app/controllers/Enderecos/UpdateEnderecoController';
import EnderecoValidator from '../middlewares/EnderecoValidator';

// instanciando objetos do crud de endereco
const createEnderecoController = new CreateEnderecoController();
const updateEnderecoController = new UpdateEnderecoController();
const listAllEnderecoController = new ListAllEnderecoController();

const routesEndereco = new Router();

// Rota para endereco
routesEndereco.get('/usuarios/eleitores/enderecos', 
    (req, res) => listAllEnderecoController.listAll(req, res));

routesEndereco.post('/usuarios/:usuario_id/eleitores/:eleitor_id/enderecos', 
    EnderecoValidator, (req,res) => createEnderecoController.create(req, res));

routesEndereco.put('/usuarios/:usuario_id/eleitores/:eleitor_id/enderecos/:id', 
    EnderecoValidator, (req, res) => updateEnderecoController.update(req, res));


export default routesEndereco;