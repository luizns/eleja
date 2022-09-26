import Router from 'express';

//importando controllers para usuários
import SessionController from '../app/controllers/auth/SessionController';

const routesSession = new Router();

// Rota para sessão
routesSession.post('/login', (req,res) => SessionController.create(req, res));

export default routesSession;