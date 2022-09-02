
import CreateJuizService from '../../services/Juizes/CreateJuizService';

export default class CreateJuizController {
    
        constructor() {
            this.service = new CreateJuizService();
        }

    create (req, res){
        const {
            id,
            name,
            email,
            password,
            matricula
        } = req.body;
    
        const createdJuiz = this.service.create(
            id,
            name,
            email,
            password,
            matricula
        );
    
        return res.status(200).json(createdJuiz.message);
    }
}