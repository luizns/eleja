import CreateUserService from "../../services/Users/CreateUserService";
import ListUserService from '../../services/Users/ListUserService';
import DeleteUserService from '../../services/Users/DeleteUserService';
import UpdateUserService from "../../services/Users/UpdateUserService";

const userController = {
    listAll: (request, response) => {
        const users = ListUserService.listAll();

        return response.send(users);
    },
    
    create: (request, response) => {
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

        return response.status(200).json(createdUser.message);
    },

    update: (request, response) => {
        const { id } = request.params
        const {
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        } = request.body;

        const updatedUser = UpdateUserService.UpdateUserService(
            id,
            name,
            cpf,
            rg,
            titulo,
            email
        );

        response.json(updatedUser)
    },

    
    delete: (request, response) => {
        const { id } = request.params;

        const deletedUser = DeleteUserService.delete(id);

        if (!deletedUser.sucess) {
            return response.status(400).json(deletedUser.message);
        }
        response.status(200).json(deletedUser.message)
    }
}

export default userController;
