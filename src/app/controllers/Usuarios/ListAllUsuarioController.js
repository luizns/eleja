import ListUsuarioService from "../../services/Usuarios/ListUsuarioService";

export default class listAllUsuarioController {

    constructor() {
        this.service = new ListUsuarioService();
    }

    listAll(request, response) {
        const usuarios = this.service.listAll();

        return response.send(usuarios);
    }

}