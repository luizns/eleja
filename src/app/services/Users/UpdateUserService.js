import ListUserService from './ListUserService';

export default class UpdateUserService {

    constructor() {}

    update(
        id,
        name,
        cpf,
        rg,
        titulo,
        email,
        password
    ) {
        const users = ListUserService.listAll()
        const userIndex = users.findIndex(user => user.id === Number(id))

        /* if (userIndex === -1) {
            return {
                message: "ID não referente a qualquer usuário."
            }
        } */

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

