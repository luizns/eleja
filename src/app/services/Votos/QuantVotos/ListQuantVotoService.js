import QuantVotoModel from '../../../models/Votos/QuantidadeVotosCandidatosModel';

export default class ListQuantVotoService {
    
    listAll() {
        const quantvoto1 = new QuantVotoModel(
            "001",
            "16:59",
            "2020/10/10"
        );

        const quantvoto2 = new QuantVotoModel(
            "002",
            "16:30",
            "2020/10/10"
        );

        return [quantvoto1, quantvoto2];
    }
}