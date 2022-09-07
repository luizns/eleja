import JuizEleitoralModel from "../../models/Juizes/JuizModel";

export default class UpdateJuizService {

    constructor() { }

    async update (id, matricula) {
        try{
             const [numeroDeRegistrosAtualizados] = await JuizEleitoralModel.update({
                matricula,
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