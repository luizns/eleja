import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import UpdateUsuarioService from '../../services/Usuarios/UpdateUsuarioService'
export default class UpdateUsuarioController {

    constructor() {
        this.service = new UpdateUsuarioService();
    }

    async update(req, res) {
        try{
            const { idusuario } = req.params;
            const { nome, email, senha  } = req.body;
    
            const usuario = await UsuarioModel.findByPk(idusuario);
    
            if (!usuario) {
                res.status(404).json({ mensagem: "Usuário não encontrado!"}) ;
            }
         
            const updateUsuario = await this.service.update( idusuario, nome, email, senha);
    
            console.log(updateUsuario)
            res.json(updateUsuario);  
        }
        catch (error){
            return { erro: error.mensagem }
        }
    }
}