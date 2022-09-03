import ListEnderecoService from '../../services/Enderecos/ListEnderecoService';

export default class ListAllController {
    constructor() {
        this.service = new ListEnderecoService();
    }

    listAll (req, res){
        const endereco = this.service.listAll();

        return res.send(endereco);
        
    }
}