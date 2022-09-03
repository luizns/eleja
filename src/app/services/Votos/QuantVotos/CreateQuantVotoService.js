import { v4 } from 'uuid';
import QuantVotoModel from '../../../models/Votos/QuantidadeVotosCandidatosModel';

export default class CreateQuantVotoService {
    constructor(){}

    async create (
        idquantvoto,
        horavoto,
        datavoto
        ) {
        try {
            const newQuantVoto = await QuantVotoModel.create({
                idquantvoto: v4(),
                horavoto,
                datavoto
            });
            
            return newQuantVoto;        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}