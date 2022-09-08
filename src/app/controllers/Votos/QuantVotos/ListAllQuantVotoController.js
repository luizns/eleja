import ListQuantVotosService from '../../../services/Votos/QuantVotos/ListQuantVotosService';

export default class ListQuantVotosController {
    constructor() {
        this.service = new ListQuantVotosService();
    }

    show(req, res) {
        const { numeroDigitado } = req.query;

        const quantvoto = this.service.count(numeroDigitado);

        return res.send(quantvoto);

    }
}