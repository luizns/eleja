import ListUserService from './ListUserService';

const DeleteUserService = {
    delete: (id) => {
        const users = ListUserService.listAll();
        const userIndex = users.findIndex(user => user.id === Number(id));

        if(userIndex === -1){
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        users.splice(userIndex, 1);

        return {
            sucess: true,
            message: "Usuário deletado com sucesso."
        }
    }
}

export default DeleteUserService;