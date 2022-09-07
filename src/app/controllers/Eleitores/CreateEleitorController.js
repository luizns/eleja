import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import CreateEleitorService from '../../services/Eleitores/CreateEleitorService';

export default class CreateEleitorController {
    
        constructor() {
            this.service = new CreateEleitorService();
        }

    async create (req, res){
        const { usuario_id } = req.params;
        
        const {
            cpf,
            titulo_eleitor,
            rg,
        } = req.body;

        const usuario = await UsuarioModel.findByPk(usuario_id);

        if(!usuario) {
            return res.status(404).json({ error: 'Usuario não encontrado!' });
        } 
  
        const createdEleitor = await this.service.create(      
            cpf,
            titulo_eleitor,
            rg,
            usuario_id
        );
 
        return res.json(createdEleitor);
    }
}