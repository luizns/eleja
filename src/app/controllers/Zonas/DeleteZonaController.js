import DeleteZonaService from '../../services/Zonas/DeleteZonaService';

export default class DeleteZonaService {

    constructor(){
        this.service = new DeleteZonaService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedZona = this.service.delete(id);

        if (!deletedZona.sucess) {
            return res.status(400).json(deletedZona.message);
        }
        res.status(200).json(deletedZona.message)
    }
}