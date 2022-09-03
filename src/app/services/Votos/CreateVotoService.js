import { v4 } from 'uuid';
import VotoModel from '../../models/Votos/VotoModel';

export default class CreateVotoService {
    constructor(){}

    async create (
        idvoto,
        id_reg_voto_eleitor,
        id_quant_votos
        ) {
        try {
            const newVoto = await VotoModel.create({
                idvoto: v4(),
                id_reg_voto_eleitor,
                id_quant_votos
            });
            
            return newVoto;        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}