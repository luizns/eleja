import RegistroVotoModel from '../../../models/Votos/RegistroVotoEleitorModel';

export default class ListRegistroVotoService {
    
    listAll() {
        const registroVoto1 = new RegistroVotoModel(
            "001",
            "16:59",
            "2020/10/10"
        );

        const registroVoto2 = new RegistroVotoModel(
            "002",
            "16:30",
            "2020/10/10"
        );

        return [registroVoto1, registroVoto2];
    }
}