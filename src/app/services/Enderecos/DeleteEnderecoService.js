import ListEnderecoService from './ListEnderecoService';

export default class DeleteEnderecoService {
    constructor() { 
        this.service = new ListEnderecoService();
      }

    delete(id) {
        const enderecos = this.service.listAll();
        const enderecoIndex = enderecos.findIndex(endereco => endereco.id === Number(id));

        if(enderecoIndex === -1){
            return {
                message: "ID não referente a qualquer endereco."
            }
        }

        enderecos.splice(enderecoIndex, 1);

        return {
            sucess: true,
            message: "Endereco deletado com sucesso."
        }
    }
}