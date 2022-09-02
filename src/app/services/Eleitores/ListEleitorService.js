import EleitorModel from '../../models/Eleitores/EleitorModel';

export default class ListEleitorService {
    
    listAll() {
        const eleitor1 = new EleitorModel(
            2,
            "13456789112",
            "021354896573",
            "213547805",
            "005",
            "369854"
        );

        const eleitor2 = new EleitorModel(
            3,
            "32654789524",
            "012354698774",
            "321458745",
            "006",
            "2547821"
        );

        return [eleitor1, eleitor2];
    }
}