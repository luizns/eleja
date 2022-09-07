import EleitorModel from '../../models/Eleitores/EleitorModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';


export default class ListEleitorService {

    constructor() {}

    async listOne(usuario_id) {
        try{
            const usuario = await UsuarioModel.findByPk(usuario_id, {
                include: { association: 'eleitores' }
            });

            return usuario;
        } catch(error) {
            return { erro: error.message };
        }
    }

    async listAll(){
        try{
            const usuarioEleitor = await UsuarioModel.findAll({
                include: [{
                    model: EleitorModel,
                    attributes: [
                        'id', 
                        'cpf', 
                        'titulo_eleitor', 
                        'rg',
                        'usuario_id', 
                        'createdAt', 
                        'updatedAt'
                    ],
                    association: 'eleitores',
                    required: true,
                }]
            })

            return usuarioEleitor;
        } catch(error) {
            return { erro: error.message };
        }

    }

}