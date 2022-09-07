
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import CreateJuizService from '../../services/Juizes/CreateJuizService';

export default class CreateJuizController {
    
        constructor() {
            this.service = new CreateJuizService();
        }

    async create (req, res){

        const { usuario_id } = req.params;

        const { matricula } = req.body;

        const usuario = await UsuarioModel.findByPk(usuario_id);

        if(!usuario) {
            return res.status(404).json({ error: 'Usuario não encontrado!' });
        } 
    
        const createdJuiz = await this.service.create(matricula, usuario_id);
    
        return res.json(createdJuiz);
    }
}