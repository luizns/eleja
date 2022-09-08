import { v4 } from 'uuid';
import ZonaModel from '../../models/Enderecos/ZonaEnderecoEleitorModel';

export default class CreateZonaService {
    constructor(){}

    async create (
        idZona,
        secao,
        numero_zona,
        ) {
        try {
            const newZona = await ZonaModel.create({
                idZona: v4(),
                secao,
                numero_zona
            });
            
            return newZona;        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}