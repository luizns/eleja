import VotoModel from '../../models/Votos/VotoModel';

export default class ListVotoService {
    
    listAll() {
        const Voto1 = new VotoModel(
            "001",
            "023546816",
            "321654687942"
        );

        const Voto2 = new VotoModel(
            "002",
            "2584687135467",
            "07864354349"
        );

        return [Voto1, Voto2];
    }
}