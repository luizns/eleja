import ListJudgesService from '../../services/Judges/ListJudgeService';

export default class ListAllController {
    constructor() {
        this.service = new ListJudgesService();
    }

    listAll (req, res){
        const judges = this.service.listAll();

        return res.send(judges);
    }
}