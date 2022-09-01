import ListCandidatoService from './ListCandidatoService';

export default class UpdateCandidatoService {

    constructor() {
        this.service = new ListCandidatoService();
    }

    Update (
        id,
        name,
        numero,
        idPartido,
        idJuizEleitoral,
        idCandidatoVoto
    ) {
        const candidatos = this.service.listAll()
        const candidatoIndex = candidatos.findIndex(candidato => candidato.id === Number(id))

        if (candidatoIndex === -1) {
            return {
                message: "ID não referente a qualquer juíz."
            }
        }

        candidatos[candidatoIndex] = {
            id,
            name,
            numero,
            idPartido,
            idJuizEleitoral,
            idCandidatoVoto
        }

        return {
            id,
            ...candidatos[candidatoIndex]
        }
    }
}