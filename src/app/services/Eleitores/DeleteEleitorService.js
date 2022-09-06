import ListEleitorService from './ListEleitorService';

export default class DeleteEleitorService {
    constructor() { 
        this.service = new ListEleitorService();
      }

    delete(id) {
        const eleitores = this.service.listAll();
        const eleitorIndex = eleitores.findIndex(eleitor => eleitor.id === Number(id));

        if(eleitorIndex === -1){
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        eleitores.splice(eleitorIndex, 1);

        return {
            sucess: true,
            message: "Usuário deletado com sucesso."
        }
    }
}