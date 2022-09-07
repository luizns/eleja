import ListEnderecoService from '../../services/Enderecos/ListEnderecoService';

export default class ListAllController {
    constructor() {
        this.service = new ListEnderecoService();
    }

   async listAll (req, res){
    const { endereco } = req.query;

    const enderecos = await this.service.listAll(endereco);

    res.json(enderecos);
    }
}