import ListZonaService from './ListZonaService';

export default class UpdateZonaService {

    constructor() {
        this.service = new ListZonaService();
    }

    Update (
        idzona,
        secao
    ) {
        const zonas = this.service.listAll()
        const zonaIndex = zonas.findIndex(zona => zona.id === Number(id))

        if (zonaIndex === -1) {
            return {
                message: "ID não referente a qualquer zona."
            }
        }

        zonas[zonaIndex] = {
            idzona,
            secao
        }

        return {
            id,
            ...zonas[zonaIndex]
        }
    }
}