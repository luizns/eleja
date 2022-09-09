import EleitorModel from '../../models/Eleitores/EleitorModel';

export default class UpdateEleitorService {

    constructor() { }

    async update (id, cpf, rg, titulo_eleitor, zona, secao) {
       try{
            const [numeroDeRegistrosAtualizados] = await EleitorModel.update({
                cpf,
                rg,
                titulo_eleitor,
                zona,
                secao
            },
            {
                where: { id },
            });
            
            if ([numeroDeRegistrosAtualizados] === 0) {
                return { mensagem: "Dados iguais" };
            } 
            return  { cpf, rg, titulo_eleitor, zona, secao };
       } catch(error) {
            return { erro: error.message };
       }
    }
}