const ListUserService = require('../Users/ListUserService');

const DeleteUserService = {
    delete: (id) => {
        const users = ListUserService.listAll();
        const user = users.find(user => user.id === Number(id));

        if(!user){
            return {
                sucess: false,
                message: "Usuário não encontrado."
            }
        }

        const index = users.indexOf(user);
        users.splice(index, 1);

        return {
            sucess: true,
            message: "Usuário deletado com sucesso."
        }
    }
}

module.exports = DeleteUserService;