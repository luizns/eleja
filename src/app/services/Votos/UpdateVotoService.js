import ListVotoService from './ListVotoService';

export default class UpdateVotoService {

    constructor() {
        this.service = new ListVotoService();
    }

    Update (
        idvoto,
        idRegVoroEleitor,
        idQuantVotos
    ) {
        const votos = this.service.listAll()
        const votoIndex = votos.findIndex(voto => voto.id === Number(id))

        if (votoIndex === -1) {
            return {
                message: "ID não referente a qualquer voto."
            }
        }

        votos[votoIndex] = {
            idvoto,
            idRegVoroEleitor,
            idQuantVotos
        }

        return {
            idvoto,
            ...votos[votoIndex]
        }
    }
}