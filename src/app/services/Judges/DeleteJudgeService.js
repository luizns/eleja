import ListJudgeService from './ListJudgeService';

export default class DeleteJudgeService {
    constructor() { 
        this.service = new ListJudgeService();
      }

    delete(id) {
        const judges = this.service.listAll();
        const judgeIndex = judges.findIndex(judge => judge.id === Number(id));

        if(judgeIndex === -1){
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        judges.splice(judgeIndex, 1);

        return {
            sucess: true,
            message: "Usuário deletado com sucesso."
        }
    }
}