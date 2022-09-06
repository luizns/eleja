import DeleteJuizService from '../../services/Juizes/DeleteJuizService';

export default class DeleteJuizService {

    constructor(){
        this.service = new DeleteJuizService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedJuiz = this.service.delete(id);

        if (!deletedJuiz.sucess) {
            return res.status(400).json(deletedJuiz.message);
        }
        res.status(200).json(deletedJuiz.message)
    }
}