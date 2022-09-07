import JuizEleitoralModel from '../../models/Juizes/JuizModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import DeleteJuizService from '../../services/Juizes/DeleteJuizService'

export default class DeleteJuizController {

    constructor(){
        this.service = new DeleteJuizService();
    }

    async delete (req, res){
        const { usuario_id, id } = req.params;

        const usuario = await UsuarioModel.findByPk(usuario_id);
        const juiz = await JuizEleitoralModel.findByPk(id);

        if(!usuario || !juiz){
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }


        const deletedJuiz = await this.service.delete(id);

        
        res.json(deletedJuiz)
    }
}