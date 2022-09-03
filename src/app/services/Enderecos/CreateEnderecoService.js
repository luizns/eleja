import { v4 } from 'uuid';
import EnderecoModel from '../../models/Enderecos/EnderecoEleitorModel';

export default class CreateEnderecoService {
    constructor(){}

    async create (
        idendereco,
        rua,
        bairro,
        numero,
        cidade,
        cep,
        id_eleitor,
        id_zona
        ) {
        try {
            const newEndereco = await EnderecoModel.create({
                idendereco: v4(),
                rua,
                bairro,
                numero,
                cidade,
                cep,
                id_eleitor,
                id_zona
            });
            
            return newEndereco;        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}