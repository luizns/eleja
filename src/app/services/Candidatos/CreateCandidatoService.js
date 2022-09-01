import { v4 } from 'uuid';
import CandidatoModel from '../../models/Candidatos/CandidatoModel';

export default class CreateCandidatoService {
    create (
        id,
        name,
        numero,
        idPartido,
        idJuizEleitoral,
        idCandidatoVoto
        ) {
        const newCandidato = new CandidatoModel(
            v4(),
            name,
            numero,
            idPartido,
            idJuizEleitoral,
            idCandidatoVoto
        );
        
        console.log(newCandidato);

        return {
            sucess: true,
            message: "Usuario criado com sucesso - ID: " + newCandidato.id
        }
    }
}