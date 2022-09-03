
import CreateEnderecoService from '../../services/Enderecos/CreateEnderecoService';

export default class CreateEnderecoController {
    
        constructor() {
            this.service = new CreateEnderecoService();
        }

    create (req, res){
        const {
            idendereco,
            rua,
            bairro,
            numero,
            cidade,
            cep,
            id_eleitor,
            id_zona
        } = req.body;
    
        const createdEndereco = this.service.create(
            idendereco,
            rua,
            bairro,
            numero,
            cidade,
            cep,
            id_eleitor,
            id_zona
        );
    
        return res.status(200).json(createdEndereco.message);
    }
}