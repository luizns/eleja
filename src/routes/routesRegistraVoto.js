import Router from 'express';

import CreateRegistraVotoController from '../app/controllers/RegistrarVoto/CreateRegistraVotoController';

import registraVotoValidator from '../middlewares/RegistraVotoValidator';

const createRegistraVotoController = new CreateRegistraVotoController();

const routesRegistraVoto = new Router();

routesRegistraVoto.post('/registra_voto_eleitor', registraVotoValidator, (req, res) =>
    createRegistraVotoController.create(req, res)
);

export default routesRegistraVoto;