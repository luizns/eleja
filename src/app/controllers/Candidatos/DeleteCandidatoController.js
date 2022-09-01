import DeleteCandidatoService from '../../services/Candidatos/DeleteCandidatoService';

export default class DeleteCandidatoService {

    constructor(){
        this.service = new DeleteCandidatoService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedCandidato = this.service.delete(id);

        if (!deletedCandidato.sucess) {
            return res.status(400).json(deletedCandidato.message);
        }
        res.status(200).json(deletedCandidato.message)
    }
}