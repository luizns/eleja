import UpdateJudgeService from '../../services/Judges/UpdateJudgeService';

export default class UpdateJudgeController {
    constructor() {
        this.service = new UpdateJudgeService();
    }

    update (req, res){
        const { id } = req.params
        const {
            name,
            email,
            password
        } = req.body;

        const updatedJudge = this.service.Update(
            id,
            name,
            email,
            password
        );

        res.json(updatedJudge)
    }
}