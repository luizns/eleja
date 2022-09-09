import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import UpdateUsuarioService from '../../services/Usuarios/UpdateUsuarioService'
export default class UpdateUsuarioController {

    constructor() {
        this.service = new UpdateUsuarioService();
    }

    async update(req, res) {
        try{
            const { id } = req.params;
            const { nome, email, senha  } = req.body;
    
            const usuario = await UsuarioModel.findByPk(id);
    
            if (!usuario) {
                res.status(404).json({ mensagem: "Usuário não encontrado!"}) ;
            }
         
            const updateUsuario = await this.service.update( id, nome, email, senha);

            res.json(updateUsuario);  
        }
        catch (error){
            return { erro: error.mensagem }
        }
    }
}