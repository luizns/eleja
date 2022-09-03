import ListRegistroVotoService from './ListRegistroVotoService';

export default class DeleteRegistroVotoService {
    constructor() { 
        this.service = new ListRegistroVotoService();
      }

    delete(id) {
        const registroVotos = this.service.listAll();
        const registroVotoIndex = registroVotos.findIndex(registroVoto => registroVoto.id === Number(id));

        if(registroVotoIndex === -1){
            return {
                message: "ID não referente a qualquer RegistroVoto."
            }
        }

        registroVotos.splice(registroVotoIndex, 1);

        return {
            sucess: true,
            message: "RegistroVoto deletado com sucesso."
        }
    }
}