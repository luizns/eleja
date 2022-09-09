import EnderecoModel from "../../models/Enderecos/EnderecoModel";
export default class UpdateEnderecoService {

    constructor() {}

    async update(id, cep, estado, cidade, bairro, rua, numero) {
        try{
            const [numeroDeRegistrosAtualizados] = await EnderecoModel.update({
                cep,
                estado,
                cidade,
                bairro,
                rua,
                numero
            },{
                where: { id },     
            });

            if ([numeroDeRegistrosAtualizados] === 0) {
                return { mensagem: "Dados iguais" };
            } 

            const endereco = await EnderecoModel.findOne({
                where: { id }
            })
            
            
            return endereco;

        } catch (error){
            console.log(error)
            return { erro: error}
        }
    }  
}