
import CreateTipoUsuariosService from '../../services/TipoUsuarios/CreateTipoUsuarioService';

export default class CreateTipoUsuariosController {
    
        constructor() {
            this.service = new CreateTipoUsuariosService();
        }

    async create (req, res){
        const {
            idtipo,
            descricao
        } = req.body;
    
        const createdTipoUsuarios = await this.service.create(
            idtipo,
            descricao
        );
    
        return res.status(200).json(createdTipoUsuarios);
    }
}