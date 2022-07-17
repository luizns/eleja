const { v4 } = require('uuid');
const UserModel = require('../../models/users/UserModel');
const ListUserService = require('./ListUserService');

const CreateUserService = {
    create: (
        id,
        name,
        cpf,
        rg,
        titulo,
        email,
        password
        ) => {
        const newUser = new UserModel(
            v4(),
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        );

        return {
            sucess: true,
            message: newUser
        }
    }
}

module.exports = CreateUserService;