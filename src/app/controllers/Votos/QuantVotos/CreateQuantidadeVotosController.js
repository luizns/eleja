import CreateQuantVotosService from "../../../services/Votos/QuantVotos/CreateQuantVotosService";

export default class CreateQuantidadeVotoController {
    constructor() {
        this.service = new CreateQuantVotosService();
    }

    async create(req, res) {
        const {
            idQuantVotosCandidato,
            candidato_id
        } = req.body;

        const voto = await this.service.create(
            idQuantVotosCandidato,
            candidato_id
        );

        return res.json(voto);
    }
}
