import PartidoModel from '../../models/Partidos/PartidoModel';

export default class ListPartidoService {
    
    listAll() {
        const partido1 = new PartidoModel(
            10,
            "Partido dos Devs Brasileiros",
            "PDB",
            "10110"
        );

        const partido2 = new PartidoModel(
            20,
            "Partido dos Backenders",
            "PB",
            "10110"
        );

        return [partido1, partido2];
    }
}