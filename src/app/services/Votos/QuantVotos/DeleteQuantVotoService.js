import ListQuantVotoService from './ListQuantVotoService';

export default class DeleteQuantVotoService {
    constructor() { 
        this.service = new ListQuantVotoService();
      }

    delete(id) {
        const quantvotos = this.service.listAll();
        const quantvotoIndex = quantvotos.findIndex(quantvoto => quantvoto.id === Number(id));

        if(quantvotoIndex === -1){
            return {
                message: "ID não referente a qualquer QuantVoto."
            }
        }

        quantvotos.splice(quantvotoIndex, 1);

        return {
            sucess: true,
            message: "QuantVoto deletado com sucesso."
        }
    }
}