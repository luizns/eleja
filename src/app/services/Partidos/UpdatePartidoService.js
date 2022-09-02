import ListPartidoService from './ListPartidoService';

export default class UpdatePartidoService {

    constructor() {
        this.service = new ListPartidoService();
    }

    Update (
        id,
        name,
        sigla,
        numeroLegenda
    ) {
        const partidos = this.service.listAll()
        const partidoIndex = partidos.findIndex(partido => partido.id === Number(id))

        if (partidoIndex === -1) {
            return {
                message: "ID não referente a qualquer juíz."
            }
        }

        partidos[partidoIndex] = {
            id,
            name,
            sigla,
            numeroLegenda
        }

        return {
            id,
            ...partidos[partidoIndex]
        }
    }
}