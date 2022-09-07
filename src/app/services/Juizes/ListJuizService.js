import JuizEleitoralModel from '../../models/Juizes/JuizModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';


export default class ListEleitorService {

    constructor() {}

    async listOne(usuario_id) {
        try{
            const juiz = await UsuarioModel.findByPk(usuario_id, {
                include: { association: 'juizes_eleitorais' }
            });

            return juiz;
        } catch(error) {
            return { erro: error.message };
        }
    }

    async listAll(){
        try{
            const usuarioJuiz = await UsuarioModel.findAll({
                include: [{
                    model: JuizEleitoralModel,
                    attributes: ['id', 'matricula','usuario_id', 'createdAt', 'updatedAt'],
                    association: 'juizes_eleitorais',
                    required: true,
                }]
            })

            return usuarioJuiz;
        } catch(error) {
            return { erro: error.message };
        }

    }

}