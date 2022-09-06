import DeletePartidoService from '../../services/Partidos/DeletePartidoService';

export default class DeletePartidoService {

    constructor(){
        this.service = new DeletePartidoService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedPartido = this.service.delete(id);

        if (!deletedPartido.sucess) {
            return res.status(400).json(deletedPartido.message);
        }
        res.status(200).json(deletedPartido.message)
    }
}