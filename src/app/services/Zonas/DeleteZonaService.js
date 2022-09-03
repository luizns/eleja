import ListZonaService from './ListZonaService';

export default class DeleteZonaService {
    constructor() { 
        this.service = new ListZonaService();
      }

    delete(id) {
        const zonas = this.service.listAll();
        const zonaIndex = zonas.findIndex(zona => zona.id === Number(id));

        if(zonaIndex === -1){
            return {
                message: "ID não referente a qualquer Zona."
            }
        }

        zonas.splice(zonaIndex, 1);

        return {
            sucess: true,
            message: "Zona deletado com sucesso."
        }
    }
}