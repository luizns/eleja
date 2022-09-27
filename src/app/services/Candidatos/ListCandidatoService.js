import CandidatoModel from '../../models/Candidatos/CandidatoModel';

export default class ListCandidatosService {
    constructor() {}

   async listAll (candidatoNome){
    try {
        if(candidatoNome){
            return await this.listOne(candidatoNome);
        }

        const candidatos = await CandidatoModel.findAll();

        return candidatos;

    }catch(error){
            console.log(error);
            return{ erro: error.message };
        }
    }
    
    async listOne(candidatoNome){
        try{
            const candidato = await CandidatoModel.findOne({ 
                where: { nome_candidato: candidatoNome}});

                if(!candidato){
                    return { mensagem: 'Candidato não encontrado'};
                }
                
                return candidato;
                
        }catch(error){
            console.log(error);
            return{ erro: error.message };
        }
    }
}