import Router from 'express';

// importando validações
import UserValidator from '../middlewares/UserValidator';
import IndexValidator from '../middlewares/IndexValidator';

// importando controllers de usuários
import userController from '../app/controllers/Users/UserController';

const routesUser = new Router();

// Rota para usuários
routesUser.get('/users', userController.listAll);
routesUser.post('/users', UserValidator, userController.create);
routesUser.put('/users/:id', IndexValidator, UserValidator, userController.update);
routesUser.delete('/users/:id', IndexValidator, userController.delete);

export default routesUser;