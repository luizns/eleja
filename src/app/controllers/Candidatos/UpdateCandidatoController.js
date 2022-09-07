import UpdateCandidatoService from "../../services/Candidatos/UpdateCandidatoService";

export default class UpdateCandidatoController {
  constructor() {
    this.service = new UpdateCandidatoService();
  }

  async update(req, res) {
    const { idCandidato } = req.params;

    const { nome_candidato,
            numero_candidato,
            id_partido,
            id_juiz_eleitoral,
            id_candidato_voto } = req.body;

    const updatedCandidato = await this.service.update(
        idCandidato,
        nome_candidato,
        numero_candidato,
        id_partido,
        id_juiz_eleitoral,
        id_candidato_voto
     );

    res.json(updatedCandidato);
  }
}
