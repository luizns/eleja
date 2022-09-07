
import CreateTipoUsuariosService from '../../services/TipoUsuarios/CreateTipoUsuarioService';

export default class CreateTipoUsuariosController {
    
        constructor() {
            this.service = new CreateTipoUsuariosService();
        }

    async create (req, res){
        const {
            descricao
        } = req.body;
    
        const createdTipoUsuarios = await this.service.create(
            descricao
        );
    
        return res.json(createdTipoUsuarios);
    }
}