import ListUsuarioService from "../../services/Usuarios/ListUsuarioService";

export default class listAllUsuarioController {

    constructor() {
        this.service = new ListUsuarioService();
    }

    listAll(req, res) {
        const usuarios = this.service.listAll();

        return res.send(usuarios);
    }

}