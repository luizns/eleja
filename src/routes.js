const Router = require('express');

const userController = require('./app/controllers/users/UserController');
const UserValidator = require('./middlewares/UserValidator');
const IndexValidator = require('./middlewares/IndexValidator');

const routes = new Router();

routes.get('/users', userController.listAll);
routes.post('/users', UserValidator, userController.create);
routes.put('/users/:id', IndexValidator, UserValidator, userController.update);
routes.delete('/users/:id', IndexValidator, userController.delete);

module.exports = routes;