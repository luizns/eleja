const ListUserService = require('../Users/ListUserService');

const UpdateUserService ={

    UpdateUserService:(
        id ,
        name,
        cpf ,
        rg ,
        titulo,
        email,
       password
    ) => {

        const users = ListUserService.listAll()
        const userIndice = users.findIndex(item => item.id === Number(id))

        if(userIndice === -1){
            return {erro:"User not found."}
        }

        users[userIndice] = {
            name,
            cpf,
            rg,
            titulo,
            email,
            password
    
        }

        return {
            id,
            ...users[userIndice]
        }
    
    }
}

module.exports = UpdateUserService;