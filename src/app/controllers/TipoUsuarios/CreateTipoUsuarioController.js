
import CreateTipoUsuarioService from '../../services/TipoUsuarios/CreateTipoUsuarioService';

export default class CreateTipoUsuariosController {
    
        constructor() {
            this.service = new CreateTipoUsuarioService();
        }

    async create (req, res){
        const {
            descricao
        } = req.body;
    
        const createdTipoUsuarios = await this.service.create(
            descricao
        );
    
        return res.status(200).json(createdTipoUsuarios);
    }
}