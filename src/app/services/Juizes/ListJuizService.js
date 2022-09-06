import JuizModel from '../../models/Juizes/JuizModel';

export default class ListJuizService {
    
    listAll() {
        const juiz1 = new JuizModel(
            56,
            "Alberto",
            "alberto@hotmail.com",
            "1234567",
            "00501"
        );

        const juiz2 = new JuizModel(
            25,
            "Alan Pereira",
            "jack@hotmail.com",
            "36598741",
            "001205",
        );

        return [juiz1, juiz2];
    }
}