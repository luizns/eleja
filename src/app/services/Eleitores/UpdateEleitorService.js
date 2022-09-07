import EleitorModel from '../../models/Eleitores/EleitorModel';

export default class UpdateEleitorService {

    constructor() { }

    async update (id, cpf, titulo_eleitor, rg) {
       try{
            const [numeroDeRegistrosAtualizados] = await EleitorModel.update({
                cpf,
                titulo_eleitor,
                rg,
            },
            {
                where: { id },
            })
            
            if ([numeroDeRegistrosAtualizados] === 0) {
                return { mensagem: "Dados iguais" };
            } 
            return  numeroDeRegistrosAtualizados;
       } catch(error) {
            return { erro: error.message };
       }
    }
}