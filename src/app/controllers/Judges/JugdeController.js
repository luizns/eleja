import CreateJudgeService from "../../services/Judges/CreateJudgeService";
import ListJudgeService from '../../services/Judges/ListJudgeService';
import DeleteJudgeService from '../../services/Judges/DeleteJudgeService';
import UpdateJudgeService from "../../services/Judges/UpdateJudgeService";

const judgeController = {
    listAll: (request, response) => {
        const judges = ListJudgeService.listAll();

        return response.send(judges);
    },
    
    create: (request, response) => {
        const {
            id,
            name,
            email,
            password,
            matricula
        } = request.body;

        const createdJudge = CreateJudgeService.create(
            id,
            name,
            email,
            password,
            matricula
        );

        return response.status(200).json(createdJudge.message);
    },

    update: (request, response) => {
        const { id } = request.params
        const {
            name,
            email,
            password
        } = request.body;

        const updatedJudge = UpdateJudgeService.UpdateJudgeService(
            id,
            name,
            email,
            password
        );

        response.json(updatedJudge)
    },

    
    delete: (request, response) => {
        const { id } = request.params;

        const deletedJudge = DeleteJudgeService.delete(id);

        if (!deletedJudge.sucess) {
            return response.status(400).json(deletedJudge.message);
        }
        response.status(200).json(deletedJudge.message)
    }
}

module.exports = judgeController;
