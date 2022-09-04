import CreateUsuarioService from "../../services/Usuarios/CreateUsuarioService";

export default class CreateUsuarioController {

    constructor() {
        this.service = new CreateUsuarioService();
    }

   async create (req, res){
        const {
            idUsuario,
            nome,
            email,
            senha,
            id_tipo_usuario
        } = req.body;

        const createdUsuario = await this.service.create(
            idUsuario,
            nome,
            email,
            senha,
            id_tipo_usuario
        );

        return res.status(200).json(createdUsuario);
    }    
}