import CreateUsuarioService from "../../services/Usuarios/CreateUsuarioService";

export default class CreateUsuarioController {

    constructor() {
        this.service = new CreateUsuarioService();
    }

   async create (request, response){
        const {
            idusuario,
            nome,
            email,
            senha,
            id_tipo_usuario
        } = request.body;

        const createdUsuario = await this.service.create(
            idusuario,
            nome,
            email,
            senha,
            id_tipo_usuario
        );

        return response.status(200).json(createdUsuario);
    }    
}