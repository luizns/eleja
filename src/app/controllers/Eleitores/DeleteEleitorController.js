import EleitorModel from '../../models/Eleitores/EleitorModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import DeleteEleitorService from '../../services/Eleitores/DeleteEleitorService';

export default class DeleteEleitorController {

    constructor(){
        this.service = new DeleteEleitorService();
    }

    async delete (req, res){
        const { usuario_id, id } = req.params;

        const usuario = await UsuarioModel.findByPk(usuario_id);
        const eleitor = await EleitorModel.findByPk(id);

        if(!usuario || !eleitor){
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }


        const deletedEleitor = await this.service.delete(id);

        
        res.json(deletedEleitor)
    }
}