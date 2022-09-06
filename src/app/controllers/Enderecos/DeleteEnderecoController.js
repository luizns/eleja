import DeleteEnderecoService from '../../services/Enderecos/DeleteEnderecoService';

export default class DeleteEnderecoService {

    constructor(){
        this.service = new DeleteEnderecoService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedEndereco = this.service.delete(id);

        if (!deletedEndereco.sucess) {
            return res.status(400).json(deletedEndereco.message);
        }
        res.status(200).json(deletedEndereco.message)
    }
}