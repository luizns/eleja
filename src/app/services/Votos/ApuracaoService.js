import databaseConfig from "../../../config/database";
import { Sequelize, QueryTypes } from "sequelize";

const sequelize = new Sequelize(databaseConfig);

export default class ApuracaoService {

    constructor() { }

    async index(req, res) {
        try {
            const apuracao = 'select nome_candidato, numero_candidato, count(id_candidato_voto) as total_votos, round((count(*) / (select count(*) from quant_votos_candidatos)*100),2) as percentual from candidatos inner join quant_votos_candidatos on idcandidato = id_candidato_voto group by numero_candidato order by total_votos desc;';

            const get = await sequelize.query({
                query: apuracao
            }, { type: QueryTypes.SELECT });

            const apuracaoBranco = 'select branco_nulo as Branco_ou_Nulo, count(*) as Total, round((count(*) / (select count(*) from quant_votos_candidatos)*100),2) as percentual from quant_votos_candidatos where branco_nulo is not null;';

            const getBranco = await sequelize.query({
                query: apuracaoBranco
            }, { type: QueryTypes.SELECT });


            return [get, getBranco];

        } catch (error) {
            return { erro: error.message };
        }
    }  
}