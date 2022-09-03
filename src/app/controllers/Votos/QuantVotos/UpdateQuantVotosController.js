import UpdateQuantVotoService from '../../../services/Votos/QuantVotos/UpdateQuantVotoService';

export default class UpdateQuantVotoController {
    constructor() {
        this.service = new UpdateQuantVotoService();
    }

    update (req, res){
        const { id } = req.params
        const {
            idquantvoto,
            horavoto,
            datavoto
        } = req.body;

        const updatedQuantVoto = this.service.Update(
            idquantvoto,
            horavoto,
            datavoto
        );

        res.json(updatedQuantVoto)
    }
}