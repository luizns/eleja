import ListJudgeService from './ListJudgeService';

const DeleteJudgeService = {
    delete: (id) => {
        const judges = ListJudgeService.listAll();
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

export default DeleteJudgeService;