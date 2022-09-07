import CreateUsuarioService from "../../services/Usuarios/CreateUsuarioService";

export default class CreateUsuarioController {

    constructor() {
        this.service = new CreateUsuarioService();
    }

   async create (req, res){
        const {
            nome,
            email,
            senha,
            tipo_usuario_id
        } = req.body;

        const createdUsuario = await this.service.create(
            nome,
            email,
            senha,
            tipo_usuario_id,
        );

        return res.json(createdUsuario);
    }    
} 