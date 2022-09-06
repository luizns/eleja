import Router from 'express';

// importando validações
import VotoValidator from '../middlewares/VotoValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para Voto
import CriarVotoController from '../app/controllers/Votos/CriarVotoController';
import ListarVotosController from '../app/controllers/Votos/ListarVotosController'; import VotoValidator from '../middlewares/VotoValidator';

// instanciando objetos do crud de Voto
const criarVotoController = new CriarVotoController();
const listarVotosController = new ListarVotosController();

const routesVoto = new Router();

// Rota para Voto
routesVoto.post('/votos', VotoValidator, (req, res) =>
    criarVotoController.criar(req, res)
);
routesVoto.get('/votos', (req, res) =>
    listarVotosController.listar(req, res)
);

export default routesVoto;