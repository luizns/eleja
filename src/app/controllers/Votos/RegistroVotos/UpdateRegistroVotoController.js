import UpdateRegistroVotoService from '../../../services/Votos/RegistroVotos/UpdateRegistroVotoService';

export default class UpdateRegistroVotoController {
    constructor() {
        this.service = new UpdateRegistroVotoService();
    }

    update (req, res){
        const { id } = req.params
        const {
            idregistrovoto,
            horavoto,
            datavoto
        } = req.body;

        const updatedRegistroVoto = this.service.Update(
            idregistrovoto,
            horavoto,
            datavoto
        );

        res.json(updatedRegistroVoto)
    }
}