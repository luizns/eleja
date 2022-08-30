import CreateUserService from "../../services/Users/CreateUserService";

export default class CreateUserController {

    constructor() {
        this.service = new CreateUserService();
    }

    create (request, response){
        const {
            id,
            name,
            cpf,
            rg,
            voter,
            email,
            password
        } = request.body;

        const createdUser = this.service.create(
            id,
            name,
            cpf,
            rg,
            voter,
            email,
            password
        );

        /* if (!createdUser.sucess) {
            return response.status(400).json(createdUser.message);
        } */

        return response.status(200).json(createdUser.message);
    }    
}