import Router from 'express';

// importando validações
import ZonaValidator from '../middlewares/ZonaValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para Zona
import CreateZonaController from '../app/controllers/Zonas/CreateZonaController';
import ListAllZonaController from '../app/controllers/Zonas/ListAllZonaController';
import UpdateZonaController from '../app/controllers/Zonas/UpdateZonaController';
import DeleteZonaController from '../app/controllers/Zonas/DeleteZonaController';
import ZonaValidator from '../middlewares/ZonaValidator';

// instanciando objetos do crud de Zona
const createZonaController = new CreateZonaController();
const deleteZonaController = new DeleteZonaController();
const updateZonaController = new UpdateZonaController();
const listAllZonaController = new ListAllZonaController();

const routesZona = new Router();

// Rota para Zona
routesZona.get('/zonas', (req, res) => listAllZonaController.listAll(req, res));

routesZona.post('/zonas', ZonaValidator, (req,res) => createZonaController.create(req, res));

routesZona.put('/zonas/:id', IndexValidator, ZonaValidator, (req, res) => updateZonaController.update(req, res));

routesZona.delete('/zonas/:id', IndexValidator, (req, res) => deleteZonaController.delete(req, res));

export default routesZona;