import ListJudgeService from './ListJudgeService';

export default class UpdateJudgeService {

    constructor() {
        this.service = new ListJudgeService();
    }

    Update (
        id,
        name,
        email,
        password,
    ) {
        const judges = this.service.listAll()
        const judgeIndex = judges.findIndex(judge => judge.id === Number(id))

        if (judgeIndex === -1) {
            return {
                message: "ID não referente a qualquer juíz."
            }
        }

        judges[judgeIndex] = {
            id,
            name,
            email,
            password
        }

        return {
            id,
            ...judges[judgeIndex]
        }
    }
}