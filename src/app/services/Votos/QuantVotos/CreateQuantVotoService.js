import { v4 } from 'uuid';
import QuantVotoModel from '../../../models/Votos/QuantidadeVotosCandidatosModel';

export default class CreateQuantVotoService {
    constructor(){}

    async create (
        idquant_votos_candidato,
        hora_voto,
        data_voto
        ) {
        try {
            const newQuantVoto = await QuantVotoModel.create({
                idquant_votos_candidato: v4(),
                hora_voto,
                data_voto
            });
            
            return newQuantVoto;        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}