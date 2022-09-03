import UpdateVotoService from '../../services/Votos/UpdateVotoService';

export default class UpdateVotoController {
    constructor() {
        this.service = new UpdateVotoService();
    }

    update (req, res){
        const { id } = req.params
        const {
            idVoto,
            idRegVoto,
            idQuantVotos
        } = req.body;

        const updatedVoto = this.service.Update(
            idVoto,
            idRegVoto,
            idQuantVotos
        );

        res.json(updatedVoto)
    }
}