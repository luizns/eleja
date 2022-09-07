import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import ListJuizService from '../../services/Juizes/ListJuizService'

export default class ListAllController {
    constructor() {
        this.service = new ListJuizService();
    }

    async listOne(req, res){
        const { usuario_id } = req.params;

        const usuario = await UsuarioModel.findByPk(usuario_id);

        if(!usuario) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        } 

        const juiz = await this.service.listOne(usuario_id);

        return res.json(juiz);
    }
    async listAll(req, res) {

        const juiz = await this.service.listAll();

        return res.json(juiz)
    }

}