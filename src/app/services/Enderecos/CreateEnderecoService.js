import { v4 } from 'uuid';
import EnderecoModel from '../../models/Enderecos/EnderecoEleitorModel';

export default class CreateEnderecoService {
    create (
        idendereco,
        rua,
        bairro,
        numero,
        cidade,
        cep,
        id_eleitor,
        id_zona
        ) {
        const newEndereco = new EnderecoModel(
            v4(),
            rua,
            bairro,
            numero,
            cidade,
            cep,
            id_eleitor,
            id_zona
        );
        
        return {
            sucess: true,
            message: "Endereco criado com sucesso - ID: " + newEndereco.id
        }
    }
}