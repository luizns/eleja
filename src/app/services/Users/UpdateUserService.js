const ListUserService = require('./ListUserService');

const UpdateUserService = {

    UpdateUserService: (
        id,
        name,
        cpf,
        rg,
        titulo,
        email,
        password
    ) => {
        const users = ListUserService.listAll()
        const userIndex = users.findIndex(user => user.id === Number(id))

        if (userIndex === -1) {
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        users[userIndex] = {
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        }

        return {
            id,
            ...users[userIndex]
        }
    }
}

module.exports = UpdateUserService;