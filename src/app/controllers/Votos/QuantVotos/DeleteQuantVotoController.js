import DeleteQuantVotoService from '../../../services/Votos/QuantVotos/DeleteQuantVotoService';

export default class DeleteQuantVotoService {

    constructor(){
        this.service = new DeleteQuantVotoService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedQuantVoto = this.service.delete(id);

        if (!deletedQuantVoto.sucess) {
            return res.status(400).json(deletedQuantVoto.message);
        }
        res.status(200).json(deletedQuantVoto.message)
    }
}