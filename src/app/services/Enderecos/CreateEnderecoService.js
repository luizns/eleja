import EnderecoModel from '../../models/Enderecos/EnderecoEleitorModel';

export default class CreateEnderecoService {
    constructor(){}

    async create (
        estado,
        cep,
        cidade,
        bairro,
        rua,
        numero,
        eleitor_id,

        ) {
        try {
            const newEndereco = await EnderecoModel.create({
                estado,
                cep,
                cidade,
                bairro,
                rua,
                numero,
                eleitor_id,
            });
            
            return newEndereco;        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}