import ListUsuarioService from "../../services/Usuarios/ListUsuarioService";

export default class listAllUsuarioController {

    constructor() {
        this.service = new ListUsuarioService();
    }

    async listAll(req, res) {
        const { nome } =  req.query;

        const usuarios = await this.service.listAll(nome);

        return res.json(usuarios);
    }

}