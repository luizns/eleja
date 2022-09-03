import ListEnderecoService from './ListEnderecoService';

export default class UpdateEnderecoService {

    constructor() {
        this.service = new ListEnderecoService();
    }

    Update (
        idendereco,
        rua,
        bairro,
        numero,
        cidade,
        cep,
        id_eleitor,
        id_zona
    ) {
        const enderecos = this.service.listAll()
        const enderecoIndex = enderecos.findIndex(endereco => endereco.id === Number(id))

        if (enderecoIndex === -1) {
            return {
                message: "ID não referente a qualquer endereco."
            }
        }

        enderecos[enderecoIndex] = {
            idendereco,
            rua,
            bairro,
            numero,
            cidade,
            cep,
            id_eleitor,
            id_zona
        }

        return {
            id,
            ...enderecos[enderecoIndex]
        }
    }
}