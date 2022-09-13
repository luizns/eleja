import CandidatoModel from '../../models/Candidatos/CandidatoModel';

export default class CreateCandidatoService {
    async create (
        nome,
        numero,
        partido_id,
        juiz_eleitoral_id,
        candidato_voto_id
        ) {
        try {

        const newCandidato = await CandidatoModel.create({
            nome,
            numero,
            partido_id,
            juiz_eleitoral_id,
            candidato_voto_id
        });
        return {
            Id: `${newCandidato.dataValues['id']}`,
            nome: `${newCandidato.dataValues['nome']}`,
            numero: `${newCandidato.dataValues['numero']}`,
            partido_id: `${newCandidato.dataValues['partido_id']}`,
            juiz_eleitoral_id: `${newCandidato.dataValues['juiz_eleitoral_id']}`,
            candidato_voto_id: `${newCandidato.dataValues['candidato_voto_id']}`,    
        }
            
        } catch(error)  {
            return { erro: error }
         } 
     
    }
}