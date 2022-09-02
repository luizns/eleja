import { v4 } from 'uuid';
import PartidoModel from '../../models/Partidos/PartidoModel';

export default class CreatePartidoService {
    create (
        id,
        name,
        sigla,
        numeroLegenda
        ) {
        const newPartido = new PartidoModel(
            v4(),
            name,
            sigla,
            numeroLegenda
        );
        
        return {
            sucess: true,
            message: "Usuario criado com sucesso - ID: " + newPartido.id
        }
    }
}