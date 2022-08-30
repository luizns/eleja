import DeleteUserService from "../../services/Users/DeleteUserService";

export default class DeleteUserController {

    constructor() {
        this.service = new DeleteUserService();
    }

    delete (request, response) {
        const { id } = request.params;

        const deletedUser = this.service.delete(id);

        if (!deletedUser.sucess) {
            return response.status(400).json(deletedUser.message);
        }
        response.status(200).json(deletedUser.message)
    }

}