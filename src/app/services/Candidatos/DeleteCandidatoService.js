import ListCandidatoService from './ListCandidatoService';

export default class DeleteCandidatoService {
    constructor() { 
        this.service = new ListCandidatoService();
      }

    delete(id) {
        const candidatos = this.service.listAll();
        const candidatoIndex = candidatos.findIndex(candidato => candidato.id === Number(id));

        if(candidatoIndex === -1){
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        candidatos.splice(candidatoIndex, 1);

        return {
            sucess: true,
            message: "Usuário deletado com sucesso."
        }
    }
}