import UpdatePartidoService from '../../services/Partidos/UpdatePartidoService';

export default class UpdatePartidoController {
    constructor() {
        this.service = new UpdatePartidoService();
    }

    update (req, res){
        const { id } = req.params
        const {
            name,
            sigla,
            numeroLegenda
        } = req.body;

        const updatedPartido = this.service.Update(
            id,
            name,
            sigla,
            numeroLegenda
        );

        res.json(updatedPartido)
    }
}