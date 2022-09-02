import ListPartidoService from './ListPartidoService';

export default class DeletePartidoService {
    constructor() { 
        this.service = new ListPartidoService();
      }

    delete(id) {
        const partidos = this.service.listAll();
        const partidoIndex = partidos.findIndex(partido => partido.id === Number(id));

        if(partidoIndex === -1){
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        partidos.splice(partidoIndex, 1);

        return {
            sucess: true,
            message: "Usuário deletado com sucesso."
        }
    }
}