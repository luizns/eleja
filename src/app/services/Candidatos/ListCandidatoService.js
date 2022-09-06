import CandidatoModel from '../../models/Candidatos/CandidatoModel';

export default class ListCandidatosService {
    
    listAll() {
        const candidato1 = new CandidatoModel(
            3535,
            "Silvio Santos",
            "42123",
            "13",
            "001",
            "001"
        );

        const candidato2 = new CandidatoModel(
            2525,
            "Alan Kardec",
            "35",
            "12",
            "002",
            "002"
        );

        return [candidato1, candidato2];
    }
}