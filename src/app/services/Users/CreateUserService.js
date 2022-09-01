import { v4 } from 'uuid';
import UserModel from '../../models/users/UserModel';

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

export default CreateUserService;