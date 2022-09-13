import PartidoModel from '../../models/Partidos/PartidoModel';


export default class CreatePartidoService {
    
    constructor() {}

    async create (nome_partido, sigla, numero_legenda) {
            try{
                const newPartido = await PartidoModel.create({
                    nome_partido,
                    sigla,
                    numero_legenda,
                });
                
                return {
                    Id: `${newPartido.dataValues['id']}`,
                    nome_partido: `${newPartido.dataValues['nome_partido']}`,
                    sigla: `${newPartido.dataValues['sigla']}`,
                    numero_legenda: `${newPartido.dataValues['numero_legenda']}`,
                }
            } catch(error) {
                return { erro: error }
            }

    }
}