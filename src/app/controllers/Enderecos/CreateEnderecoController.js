
import EleitorModel from '../../models/Eleitores/EleitorModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import CreateEnderecoService from '../../services/Enderecos/CreateEnderecoService';

export default class CreateEnderecoController {
    
        constructor() {
            this.service = new CreateEnderecoService();
        }

    async create (req, res){
        const { usuario_id ,eleitor_id } = req.params;

        const {
            estado,
            cep,
            cidade,
            bairro,
            rua,
            numero,
        } = req.body;

        const usuario = await UsuarioModel.findByPk(usuario_id);

        const eleitor = await EleitorModel.findByPk(eleitor_id);

        if(!usuario || !eleitor){
            return res.status(404).json({ error: 'Usuário não encontrado!' })
        }
    
        const createdEndereco = await this.service.create(
            estado,
            cep,
            cidade,
            bairro,
            rua,
            numero,
            eleitor_id
        );
    
        return res.json(createdEndereco);
    }
}