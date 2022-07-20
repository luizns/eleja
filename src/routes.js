const Router = require('express');

const userController = require('./app/controllers/Users/UserController');

const routes = new Router();

routes.get('/Users', userController.listAll);
routes.post('/Users', userController.create);
routes.put('/Users/:id', userController.update);
<<<<<<< HEAD

=======
routes.delete('/Users/:id', userController.delete);
>>>>>>> d147961b4a5868433456875b537cbfb27dcf503b
module.exports = routes;