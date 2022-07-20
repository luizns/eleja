const Router = require('express');

const userController = require('./app/controllers/Users/UserController');

const routes = new Router();

routes.get('/Users', userController.listAll);
routes.post('/Users', userController.create);
routes.delete('/Users/:id', userController.delete);
routes.put('/Users/:id', userController.update);

module.exports = routes;