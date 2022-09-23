import Router from 'express';

//importando controllers para usuários
import SessionController from '../app/controllers/auth/SessionController';

const sessionController = new SessionController();


const routesSession = new Router();

// Rota para sessão
routesSession.post('/login', (req,res) => sessionController.create(req, res));

export default routesSession;