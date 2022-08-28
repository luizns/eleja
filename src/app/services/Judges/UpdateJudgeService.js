import ListJudgeService from './ListJudgeService';

const UpdateJudgeService = {

    UpdateJudgeService: (
        name,
        email,
        password,
    ) => {
        const judges = ListUserService.listAll()
        const judgeIndex = judges.findIndex(judge => judge.id === Number(id))

        if (judgeIndex === -1) {
            return {
                message: "ID não referente a qualquer juíz."
            }
        }

        judges[judgeIndex] = {
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

export default UpdateJudgeService;