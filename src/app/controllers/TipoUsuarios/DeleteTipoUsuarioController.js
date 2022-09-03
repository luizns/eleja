import DeleteTipoUsuarioService from '../../services/TipoUsuarios/DeleteTipoUsuarioService';

export default class DeleteTipoUsuarioService {

    constructor(){
        this.service = new DeleteTipoUsuarioService();
    }

    delete (req, res){
        const { id } = req.params;

        const deletedTipoUsuario = this.service.delete(id);

        if (!deletedTipoUsuario.sucess) {
            return res.status(400).json(deletedTipoUsuario.message);
        }
        res.status(200).json(deletedTipoUsuario.message)
    }
}