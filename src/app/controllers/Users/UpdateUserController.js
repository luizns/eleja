import UpdateUserService from "../../services/Users/UpdateUserService";

export default class UpdateUserController {

    constructor() {
        this.service = new UpdateUserService();
    }

    update(request, response) {
        const { id } = request.params
        const {
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        } = request.body;

        const updatedUser = this.service.update(
            id,
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        );

        response.json(updatedUser)
    }

}