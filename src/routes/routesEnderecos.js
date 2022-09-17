import Router from 'express';

// importando validações
import EnderecoValidator from '../middlewares/EnderecoValidator';

//importando controllers para endereco
import CreateEnderecoController from '../app/controllers/Enderecos/CreateEnderecoController';
import ListAllEnderecoController from '../app/controllers/Enderecos/ListAllEnderecoController';
import UpdateEnderecoController from '../app/controllers/Enderecos/UpdateEnderecoController';
import DeleteEnderecoController from '../app/controllers/Enderecos/DeleteEnderecoController';
import EnderecoValidator from '../middlewares/EnderecoValidator';

// instanciando objetos do crud de endereco
const createEnderecoController = new CreateEnderecoController();
const deleteEnderecoController = new DeleteEnderecoController();
const updateEnderecoController = new UpdateEnderecoController();
const listAllEnderecoController = new ListAllEnderecoController();

const routesEndereco = new Router();

// Rota para endereco
routesEndereco.get('/enderecos', (req, res) => listAllEnderecoController.listAll(req, res));

routesEndereco.post('/enderecos', EnderecoValidator, (req,res) => createEnderecoController.create(req, res));

routesEndereco.put('/enderecos/:idEndereco',  EnderecoValidator, (req, res) => updateEnderecoController.update(req, res));

routesEndereco.delete('/enderecos/:idEndereco', (req, res) => deleteEnderecoController.delete(req, res));

export default routesEndereco;