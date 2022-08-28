import Router from 'express';

import userController from './app/controllers/Users/UserController';
// const judgeController =  require('../src/app/controllers/Judges/JudgeController');

import UserValidator from './middlewares/UserValidator';
import IndexValidator from './middlewares/IndexValidator';

const routes = new Router();

// Rota para usuários
routes.get('/users', userController.listAll);
routes.post('/users', UserValidator, userController.create);
routes.put('/users/:id', IndexValidator, UserValidator, userController.update);
routes.delete('/users/:id', IndexValidator, userController.delete);

// Rota para juízes
// routes.get('/judges', judgeController.listAll);
// routes.post('/judges', JudgeValidator, judgeController.create);
// routes.put('/judges/:id', IndexValidator, JudgeValidator, judgeController.update);
// routes.delete('/judges/:id', IndexValidator, judgeController.delete);

export default routes;