import InicializarUrnaService from "../../services/InicializarUrna/InicializarUrnaService";

export default class InicializarUrnaController {
    constructor() { this.service = new InicializarUrnaService() };

    async list(req, res) {
        const votos = await this.service.initiate();

        if (votos.mensagem) { res.json(votos) }

        res.status(204).json(votos)
    }
}
