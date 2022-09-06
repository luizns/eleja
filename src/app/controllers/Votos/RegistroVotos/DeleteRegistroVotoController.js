import DeleteRegistroVotoService from '../../../services/Votos/RegistroVotos/DeleteRegistroVotoService';

export default class DeleteRegistroVotoService {

    constructor(){
        this.service = new DeleteRegistroVotoService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedRegistroVoto = this.service.delete(id);

        if (!deletedRegistroVoto.sucess) {
            return res.status(400).json(deletedRegistroVoto.message);
        }
        res.status(200).json(deletedRegistroVoto.message)
    }
}