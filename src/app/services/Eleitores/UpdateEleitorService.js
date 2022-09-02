import ListEleitorService from './ListEleitorService';

export default class UpdateEleitorService {

    constructor() {
        this.service = new ListEleitorService();
    }

    Update (
        id,
        cpf,
        titulo,
        rg,
        idUsuario,
        idEleitorVoto
    ) {
        const eleitores = this.service.listAll()
        const eleitorIndex = eleitores.findIndex(eleitor => eleitor.id === Number(id))

        if (eleitorIndex === -1) {
            return {
                message: "ID não referente a qualquer juíz."
            }
        }

        eleitores[eleitorIndex] = {
            id,
            cpf,
            titulo,
            rg,
            idUsuario,
            idEleitorVoto
        }

        return {
            id,
            ...eleitores[eleitorIndex]
        }
    }
}