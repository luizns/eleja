const { v4 } = require('uuid');
const UserModel = require('../../models/users/UserModel');

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
            message: "Usuario criado com sucesso - ID: " + newUser.id
        }
    }
}

module.exports = CreateUserService;