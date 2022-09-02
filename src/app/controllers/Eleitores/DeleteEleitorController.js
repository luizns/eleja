import DeleteEleitorService from '../../services/Eleitores/DeleteEleitorService';

export default class DeleteEleitorService {

    constructor(){
        this.service = new DeleteEleitorService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedEleitor = this.service.delete(id);

        if (!deletedEleitor.sucess) {
            return res.status(400).json(deletedEleitor.message);
        }
        res.status(200).json(deletedEleitor.message)
    }
}