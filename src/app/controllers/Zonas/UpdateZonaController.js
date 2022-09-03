import UpdateZonaService from '../../services/Zonas/UpdateZonaService';

export default class UpdateZonaController {
    constructor() {
        this.service = new UpdateZonaService();
    }

    update (req, res){
        const { id } = req.params
        const {
            idzona,
            secao
        } = req.body;

        const updatedZona = this.service.Update(
            idzona,
            secao
        );

        res.json(updatedZona)
    }
}