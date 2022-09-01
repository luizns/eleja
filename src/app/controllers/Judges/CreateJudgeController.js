
import CreateJudgeService from '../../services/Judges/CreateJudgeService';

export default class CreateJudgeController {
    
        constructor() {
            this.service = new CreateJudgeService();
        }

    create (req, res){
        const {
            id,
            name,
            email,
            password,
            matricula
        } = req.body;
    
        const createdJudge = this.service.create(
            id,
            name,
            email,
            password,
            matricula
        );
    
        return res.status(200).json(createdJudge.message);
    }
}