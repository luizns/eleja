import { v4 } from 'uuid';
import RegistroVotoModel from '../../../models/Votos/RegistroVotoEleitorModel';

export default class CreateRegistroVotoService {
    constructor(){}

    async create (
        id_registro_voto_eleitor,
        hora_voto,
        data_voto
        ) {
        try {
            const newRegistroVoto = await RegistroVotoModel.create({
                id_registro_voto_eleitor: v4(),
                hora_voto,
                data_voto
            });
            
            return newRegistroVoto;        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}