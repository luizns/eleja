import DeleteTipoUsuarioService from '../../services/TipoUsuarios/DeleteTipoUsuarioService';

export default class DeleteTipoUsuarioService {

    constructor(){
        this.service = new DeleteTipoUsuarioService();
    }

    async delete (req, res){
        const { id } = req.params;

        const deletedTipoUsuario = await this.service.delete(id);

        if (!deletedTipoUsuario) {
            return { error: 'Tipo de Usuário não Encontrado!' };
        }

        res.json(deletedTipoUsuario)
    }
}