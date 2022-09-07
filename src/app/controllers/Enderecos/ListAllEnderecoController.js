import ListEnderecoService from '../../services/Enderecos/ListEnderecoService';

export default class ListAllController {
    constructor() {
        this.service = new ListEnderecoService();
    }


    async listAll(req, res) {

        const endereco = await this.service.listAll();

        return res.json(endereco);
    }
}