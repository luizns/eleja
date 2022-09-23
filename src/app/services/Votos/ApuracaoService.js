import databaseConfig from "../../../config/database";
import { Sequelize, QueryTypes } from "sequelize";

const sequelize = new Sequelize(databaseConfig);

const resultado = []

export default class ApuracaoService {

    constructor() {}

    async index() {
        try{
            const apuracao = 'select nome_candidato, numero_candidato, id_candidato_voto, count(id_candidato_voto) as total_votos, round((count(*) / (select count(*) from quant_votos_candidatos)*100),2) as percentual from candidatos inner join quant_votos_candidatos on idcandidato = id_candidato_voto group by numero_candidato order by total_votos desc;';

            const get = await sequelize.query({
                query:apuracao                
            },{type: QueryTypes.SELECT});

            const apuracaoBranco = 'select *, count(*) as quant_votos_brancos from quant_votos_candidatos where branco_nulo is not null;';

            const getBranco = await sequelize.query({
                query:apuracaoBranco                
            },{type: QueryTypes.SELECT});
            
            resultado.push(get) 
            resultado.push(getBranco)

            return resultado

        } catch(error) {
            return { erro: error.message };
        }
    }
    // async listBranco() {
    //     try{
    //         const apuracaoBranco = 'select *, count(*) as quant_votos_brancos from quant_votos_candidatos where branco_nulo is not null;';

    //         const getBranco = await sequelize.query({
    //             query:apuracaoBranco                
    //         },{type: QueryTypes.SELECT});
    
    //         resultado.append(getBranco)

    //     } catch(error) {
    //         return { erro: error.message };
    //     }
    // }
}