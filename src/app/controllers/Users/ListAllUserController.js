import ListUserService from "../../services/Users/ListUserService";

export default class listAllUserController {

    constructor() {
        this.service = new ListUserService();
    }

    listAll(request, response) {
        const users = this.service.listAll();

        return response.send(users);
    }

}