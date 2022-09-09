import EleitorModel from '../../models/Eleitores/EleitorModel';
import EnderecoModel from '../../models/Enderecos/EnderecoModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import UpdateEnderecoService from '../../services/Enderecos/UpdateEnderecoService';

export default class UpdateEnderecoController {
    constructor() {
        this.service = new UpdateEnderecoService();
    }

    async update (req, res){
        
        const { usuario_id, eleitor_id, id } = req.params;
        const {
            cep,
            estado,
            cidade,
            bairro,
            rua,
            numero,
        } = req.body;

        const usuario = await UsuarioModel.findByPk(usuario_id);

        const eleitor = await EleitorModel.findByPk(eleitor_id);

        const endereco = await EnderecoModel.findByPk(id);

        if(!usuario || !eleitor || !endereco){
            return res.status(404).json({ error: 'Usuário não encontrado!' })
        }

        const updatedEndereco = await this.service.update(
            id,
            cep,
            estado,
            cidade,
            bairro,
            rua,
            numero,)

        res.json(updatedEndereco);
    }
}