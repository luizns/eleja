import InicioUrnaService from "../../../services/Votos/QuantVotos/InicioUrnaService";

export default class InicioUrnaController {
    constructor() { this.service = new InicioUrnaService() };

    async list(req, res) {
        const votos = await this.service.initiate();

        if (votos.mensagem) { res.json(votos) }

        res.status(204).json(votos)
    }
}
