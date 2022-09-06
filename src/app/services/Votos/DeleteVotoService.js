import ListVotoService from './ListVotoService';

export default class DeleteVotoService {
    constructor() { 
        this.service = new ListVotoService();
      }

    delete(id) {
        const Votos = this.service.listAll();
        const VotoIndex = Votos.findIndex(Voto => Voto.id === Number(id));

        if(VotoIndex === -1){
            return {
                message: "ID não referente a qualquer Voto."
            }
        }

        Votos.splice(VotoIndex, 1);

        return {
            sucess: true,
            message: "Voto deletado com sucesso."
        }
    }
}