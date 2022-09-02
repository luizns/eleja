import { v4 } from 'uuid';
import EleitorModel from '../../models/Eleitores/EleitorModel';

export default class CreateEleitorService {
    create (
        id,
        cpf,
        titulo,
        rg,
        idUsuario,
        idEleitorVoto
        ) {
        const newEleitor = new EleitorModel(
            v4(),
            cpf,
            titulo,
            rg,
            idUsuario,
            idEleitorVoto
        );
        
        return {
            sucess: true,
            message: "Usuario criado com sucesso - ID: " + newEleitor.id
        }
    }
}