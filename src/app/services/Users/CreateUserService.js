const { v4 } = require('uuid');
const UserModel = require('../../models/Users/UserModel');
const ListUserService = require('../Users/ListUserService');

const CreateUserService = {
    create: (id,
        name,
        cpf,
        rg,
        titulo,
        email,
        password) =>{
            if(name.length < 5){
                const createdUser ={
                    sucess: false,
                    message: "Nome precisa ter pelo menos 5 caracteres."
                }

                return createdUser;
            }

            const newUser = new UserModel(v4(),
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