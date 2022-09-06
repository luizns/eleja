import DeleteVotoService from '../../services/Votos/DeleteVotoService';

export default class DeleteVotoService {

    constructor(){
        this.service = new DeleteVotoService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedVoto = this.service.delete(id);

        if (!deletedVoto.sucess) {
            return res.status(400).json(deletedVoto.message);
        }
        res.status(200).json(deletedVoto.message)
    }
}