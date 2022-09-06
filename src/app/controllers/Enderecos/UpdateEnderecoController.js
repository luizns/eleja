import UpdateEnderecoService from '../../services/Enderecos/UpdateEnderecoService';

export default class UpdateEnderecoController {
    constructor() {
        this.service = new UpdateEnderecoService();
    }

    update (req, res){
        const { id } = req.params
        const {
            rua,
            bairro,
            numero,
            cidade,
            cep,
            id_eleitor,
            id_zona
        } = req.body;

        const updatedEndereco = this.service.Update(
            idendereco,
            rua,
            bairro,
            numero,
            cidade,
            cep,
            id_eleitor,
            id_zona
        );

        res.json(updatedEndereco)
    }
}