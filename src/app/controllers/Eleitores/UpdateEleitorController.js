import EnderecoModel from '../../models/Enderecos/EnderecoModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import UpdateEleitorService from '../../services/Eleitores/UpdateEleitorService';

export default class UpdateEleitorController {
    constructor() {
        this.service = new UpdateEleitorService();
    }

    async update (req, res){
        try{ 
            const { usuario_id, id  } = req.params;
            const {
                cpf,
                rg,
                titulo_eleitor,
                zona,
                secao

            } = req.body;

            const usuario = await UsuarioModel.findByPk(usuario_id);
            
            const eleitor = await EnderecoModel.findByPk(id);

            if(!usuario || !eleitor){
                return res.status(404).json({ error: 'Usuario não encontrado' });
            }

            const updatedEleitor = await this.service.update(
                id,
                cpf,
                rg,
                titulo_eleitor,
                zona,
                secao,
                usuario_id
            );

            res.json(updatedEleitor);
        } catch(error) {
            return { erro: error }
        }
    }
}

    