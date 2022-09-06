import ListRegistroVotoService from './ListRegistroVotoService';

export default class UpdateRegistroVotoService {

    constructor() {
        this.service = new ListRegistroVotoService();
    }

    Update (
        idregistrovoto,
        horavoto,
        datavoto
    ) {
        const registrovotos = this.service.listAll()
        const registrovotoIndex = registrovotos.findIndex(registrovoto => registrovoto.id === Number(id))

        if (registrovotoIndex === -1) {
            return {
                message: "ID não referente a qualquer registrovoto."
            }
        }

        registrovotos[registrovotoIndex] = {
            idregistrovoto,
            horavoto,
            datavoto
        }

        return {
            id,
            ...registrovotos[registrovotoIndex]
        }
    }
}