import UpdateCandidatoService from '../../services/Candidatos/UpdateCandidatoService';

export default class UpdateCandidatoController {
    constructor() {
        this.service = new UpdateCandidatoService();
    }

    update (req, res){
        const { id } = req.params
        const {
            name,
            numero,
            idPartido,
            idJuizEleitoral,
            idCandidatoVoto
        } = req.body;

        const updatedCandidato = this.service.Update(
            id,
            name,
            numero,
            idPartido,
            idJuizEleitoral,
            idCandidatoVoto
        );

        res.json(updatedCandidato)
    }
}