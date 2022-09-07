import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import ListEleitorService from '../../services/Eleitores/ListEleitorService';

export default class ListAllController {
    constructor() {
        this.service = new ListEleitorService();
    }

    async listOne(req, res){
        const { usuario_id } = req.params;

        const usuario = await UsuarioModel.findByPk(usuario_id);

        if(!usuario) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        } 

        const eleitor = await this.service.listOne(usuario_id);

        return res.json(eleitor);
    }
    async listAll(req, res) {

        const eleitor = await this.service.listAll();

        return res.json(eleitor)
    }

}