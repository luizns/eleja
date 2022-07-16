const { v4 } = require('uuid');
const UserModel = require('../../models/Users/UserModel');
const ListUserService = require('../Users/ListUserService');

const CreateUserService = {
    create: (
        id,
        name,
        cpf,
        rg,
        voter,
        email,
        password
        ) => {
        const newUser = new UserModel(
            v4(),
            name,
            Number(cpf),
            Number(rg),
            Number(voter),
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