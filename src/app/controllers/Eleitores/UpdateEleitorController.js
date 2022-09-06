import UpdateEleitorService from '../../services/Eleitores/UpdateEleitorService';

export default class UpdateEleitorController {
    constructor() {
        this.service = new UpdateEleitorService();
    }

    update (req, res){
        const { id } = req.params
        const {
            cpf,
            titulo,
            rg,
            idUsuario,
            idEleitorVoto
        } = req.body;

        const updatedEleitor = this.service.Update(
            id,
            cpf,
            titulo,
            rg,
            idUsuario,
            idEleitorVoto
        );

        res.json(updatedEleitor)
    }
}