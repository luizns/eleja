import Router from 'express';


import ApuracaoController from '../app/controllers/Votos/ApuracaoController';

const apuracaoController = new ApuracaoController();


const routesApuracao = new Router();

routesApuracao.get('/apuracao', (req, res) =>
apuracaoController.index(req, res)
);

export default routesApuracao;
