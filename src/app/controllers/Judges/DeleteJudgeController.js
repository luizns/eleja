import DeleteJudgeService from '../../services/Judges/DeleteJudgeService';

export default class DeleteJudgeService {

    constructor(){
        this.service = new DeleteJudgeService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedJudge = this.service.delete(id);

        if (!deletedJudge.sucess) {
            return res.status(400).json(deletedJudge.message);
        }
        res.status(200).json(deletedJudge.message)
    }
}