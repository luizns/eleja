import ListJuizService from './ListJuizService';

export default class DeleteJuizService {
    constructor() { 
        this.service = new ListJuizService();
      }

    delete(id) {
        const juizes = this.service.listAll();
        const juizIndex = juizes.findIndex(juiz => juiz.id === Number(id));

        if(juizIndex === -1){
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        juizes.splice(juizIndex, 1);

        return {
            sucess: true,
            message: "Usuário deletado com sucesso."
        }
    }
}