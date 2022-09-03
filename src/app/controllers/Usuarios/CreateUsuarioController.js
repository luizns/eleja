import CreateUsuarioService from "../../services/Usuarios/CreateUsuarioService";

export default class CreateUsuarioController {

    constructor() {
        this.service = new CreateUsuarioService();
    }

   async create (req, res){
        const {
            idusuario,
            nome,
            email,
            senha,
            id_tipo_usuario
        } = req.body;

        const createdUsuario = await this.service.create(
            idusuario,
            nome,
            email,
            senha,
            id_tipo_usuario
        );

        return res.status(200).json(createdUsuario);
    }    
}