import { Router } from 'express';

import UserValidator from '../src/middlewares/UserValidator';
import IndexValidator from '../src/middlewares/IndexValidator'

import CreateUserController from './app/controllers/Users/CreateUserController';
import ListAllUserController from './app/controllers/Users/ListAllUserController';
import UpdateUserController from './app/controllers/Users/UpdateUserController';
import DeleteUserController from './app/controllers/Users/DeleteUserController';


const listAllUserController = new ListAllUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


const routes = new Router();

// ROTAS DO USUARIO
routes.get('/users', 
    (req, res) => listAllUserController.listAll(req, res));

routes.post('/users', UserValidator, 
    (req, res) => createUserController.create(req, res));

routes.put('/users/:id', IndexValidator, UserValidator,(req, res) => 
    updateUserController.update(req, res));
    
routes.delete('/users/:id', IndexValidator, (req, res) => 
    deleteUserController.delete (req, res));

export default routes;