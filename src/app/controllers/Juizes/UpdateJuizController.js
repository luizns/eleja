import UpdateJuizService from '../../services/Juizes/UpdateJuizService';

export default class UpdateJuizController {
    constructor() {
        this.service = new UpdateJuizService();
    }

    update (req, res){
        const { id } = req.params
        const {
            name,
            email,
            password
        } = req.body;

        const updatedJuiz = this.service.Update(
            id,
            name,
            email,
            password
        );

        res.json(updatedJuiz)
    }
}