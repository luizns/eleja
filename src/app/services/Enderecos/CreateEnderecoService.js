import EnderecoModel from "../../models/Enderecos/EnderecoModel";


export default class CreateEnderecoService {
    constructor(){}

    async create (
        cep,
        estado,
        cidade,
        bairro,
        rua,
        numero,
        eleitor_id
        ) {
        try {
            const newEndereco = await EnderecoModel.create({
                cep, 
                estado,
                cidade,
                bairro,
                rua,
                numero,
                eleitor_id
            });
            
            return {
               Id: `${newEndereco.dataValues['id']}`,
               CEP: `${newEndereco.dataValues['cep']}`,
               Estado: `${newEndereco.dataValues['estado']}`,
               Cidade: `${newEndereco.dataValues['cidade']}`,
               Bairro: `${newEndereco.dataValues['bairro']}`,
               Rua: `${newEndereco.dataValues['rua']}`,
               Número: `${newEndereco.dataValues['numero']}`,
            };        
        } catch(error) {
            return { erro: error.message };
        }
    }
}