import ListQuantVotoService from './ListQuantVotoService';

export default class UpdateQuantVotoService {

    constructor() {
        this.service = new ListQuantVotoService();
    }

    Update (
        idquantvoto,
        horavoto,
        datavoto
    ) {
        const quantvotos = this.service.listAll()
        const quantvotoIndex = quantvotos.findIndex(quantvoto => quantvoto.id === Number(id))

        if (quantvotoIndex === -1) {
            return {
                message: "ID não referente a qualquer quantvoto."
            }
        }

        quantvotos[quantvotoIndex] = {
            idquantvoto,
            horavoto,
            datavoto
        }

        return {
            id,
            ...quantvotos[quantvotoIndex]
        }
    }
}