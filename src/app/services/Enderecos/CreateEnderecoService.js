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
            
            return {
               Id: `${newEndereco.dataValues['id']}`,
               Estado: `${newEndereco.dataValues['estado']}`,
               CEP: `${newEndereco.dataValues['cep']}`,
               Cidade: `${newEndereco.dataValues['cidade']}`,
               Bairro: `${newEndereco.dataValues['bairro']}`,
               Rua: `${newEndereco.dataValues['rua']}`,
               Número: `${newEndereco.dataValues['numero']}`,
            };        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}