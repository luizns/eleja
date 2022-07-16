const CreateUserService = require("../../services/Users/CreateUserService");
const ListUserService = require('../../services/Users/ListUserService');

const userController = {
    listAll: (request, response) =>{
        const users = ListUserService.listAll();

        return response.send(users);
    },

    create: (request, response) =>{
        const {
            id,
            name,
            cpf,
            rg,
            voter,
            email,
            password
        } = request.body;

        const createdUser = CreateUserService.create(
            id,
            name,
            cpf,
            rg,
            voter,
            email,
            password
        );

        /* if (!createdUser.sucess) {
            return response.status(400).json(createdUser.message);
        } */

        return response.status(200).json(createdUser.message);
    }
}

module.exports = userController;