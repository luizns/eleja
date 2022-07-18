const CreateUserService = require("../../services/users/CreateUserService");
const ListUserService = require('../../services/users/ListUserService');
const DeleteUserService = require('../../services/users/DeleteUserService');
const UpdateUserService = require("../../services/users/UpdateUserService");

const userController = {
    listAll: (request, response) => {
        const users = ListUserService.listAll();

        return response.send(users);
    },

    create: (request, response) => {
        const {
            id,
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
        return response.status(200).json(createdUser.message);
    },

    update: (request, response) => {
        const { id } = request.params
        const {
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        } = request.body;

        const updatedUser = UpdateUserService.UpdateUserService(
            Number(id),
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        );

        response.json(updatedUser)
    },

    
    delete: (request, response) => {
        const { id } = request.params;

        const deletedUser = DeleteUserService.delete(id);

        if (!deletedUser.sucess) {
            return response.status(400).json(deletedUser.message);
        }
        response.status(200).json(deletedUser.message)
    }
}

module.exports = userController;