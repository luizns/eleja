const CreateUserService = require("../../services/Users/CreateUserService");
const ListUserService = require('../../services/Users/ListUserService');
const DeleteUserService = require('../../services/Users/DeleteUserService');
const UpdateUserService = require("../../services/Users/UpdateUserService");

const userController = {
    listAll: (request, response) =>{
        const users = ListUserService.listAll();

        return response.send(users);
    },
    create: (request, response) =>{
        const {id,
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        } = request.body;

        const createdUser = CreateUserService.create(
            id,
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        );
        if (!createdUser.sucess) {
            return response.status(400).json(createdUser.message);
        }

        return response.status(200).json(createdUser.message);
    },
    delete: (request, response) =>{
        const {id} = request.params;

        const deletedUser = DeleteUserService.delete(id);
       
        if (!deletedUser.sucess) {
            return response.status(400).json(deletedUser.message);
        }

        response.status(200).json(deletedUser.message);
    },

    update:(request,response) =>{
        const {id} = request.params
        const {
            name,
            cpf,
            rg,
            titulo,
            email,
            password
      } = request.body;

      const updatedUser = UpdateUserService.UpdateUserService(
        id,
        name,
        cpf,
        rg,
        titulo,
        email,
        password
      );

      response.json(updatedUser)
        } 
}
module.exports = userController;