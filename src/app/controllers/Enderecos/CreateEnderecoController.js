
import CreateEnderecoService from '../../services/Enderecos/CreateEnderecoService';

export default class CreateEnderecoController {
    
        constructor() {
            this.service = new CreateEnderecoService();
        }

    async create (req, res){
        const {
            idendereco,
            rua,
            bairro,
            numero,
            cidade,
            cep,
            uf,
            id_eleitor,
            id_zona
        } = req.body;
    
        const createdEndereco = await this.service.create(
            idendereco,
            rua,
            bairro,
            numero,
            cidade,
            cep,
            uf,
            id_eleitor,
            id_zona
        );
    
        return res.status(200).json(createdEndereco);
    }
}