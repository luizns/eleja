import UpdateVotoService from '../../services/Votos/UpdateVotoService';

export default class UpdateVotoController {
    constructor() {
        this.service = new UpdateVotoService();
    }

    update (req, res){
        const { idVoto } = req.params
        const {
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