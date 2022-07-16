const Router = require('express');

const userController = require('./app/controllers/Users/UserController');

const routes = new Router();

routes.get('/users', userController.listAll)
routes.post('/users', userController.create);

module.exports = routes;