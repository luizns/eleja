import CreateUserService from "../../services/Users/CreateUserService";

export default class CreateUserController {

    constructor() {
        this.service = new CreateUserService();
    }

   async create (request, response){
        const {
            idusuario,
            nome,
            email,
            senha,
            id_tipo_usuario
        } = request.body;

        const createdUser = await this.service.create(
            idusuario,
            nome,
            email,
            senha,
            id_tipo_usuario
        );

        /* if (!createdUser.sucess) {
            return response.status(400).json(createdUser.message);
        } */

        return response.status(200).json(createdUser);
    }    
}