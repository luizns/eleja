import InicioUrnaService from "../../../services/Votos/QuantVotos/InicioUrnaService";

export default class InicioUrnaController {
    constructor() { this.service = new InicioUrnaService() };

    async list(req, res) {
        const votos = this.service.initiate();

        if (votos.mensagem) { res.status(201).json(votos) }

        res.status(206).json(votos)
    }
}