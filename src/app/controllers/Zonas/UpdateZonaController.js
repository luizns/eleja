import UpdateZonaService from '../../services/Zonas/UpdateZonaService';

export default class UpdateZonaController {
    constructor() {
        this.service = new UpdateZonaService();
    }

    update (req, res){
        const { idzona } = req.params
        const {
            secao
        } = req.body;

        const updatedZona = this.service.Update(
            idzona,
            secao
        );

        res.json(updatedZona)
    }
}