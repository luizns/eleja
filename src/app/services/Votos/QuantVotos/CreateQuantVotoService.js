import { v4 } from 'uuid';
import { date } from 'yup';
import QuantVotoModel from '../../../models/Votos/QuantidadeVotosCandidatosModel';

export default class CreateQuantVotoService {
    constructor(){}

    async create (
        idQuantVotosCandidato,
        hora_voto,
        data_voto
        ) {
        try {
            const newQuantVoto = await QuantVotoModel.create({
                idQuantVotosCandidato: v4(),
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