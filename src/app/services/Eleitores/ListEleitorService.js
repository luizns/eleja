import EleitorModel from '../../models/Eleitores/EleitorModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';


export default class ListEleitorService {

    constructor() {}

    async listOne(usuario_id) {
        try{
            const usuario = await UsuarioModel.findByPk(usuario_id, {
                include: { association: 'eleitores',
                attributes: [
                    'id', 
                    'cpf', 
                    'rg',
                    'titulo_eleitor', 
                    'zona',
                    'secao',     
                ],
            },
                attributes:  { exclude: ['senha','tipo_usuario_id','createdAt', 'updatedAt',] },
            });

            return usuario;
        } catch(error) {
            return { erro: error.message };
        }
    }

    async listAll(){
        try{
            const usuarioEleitor = await UsuarioModel.findAll({
                attributes:  { exclude: ['senha','tipo_usuario_id','createdAt', 'updatedAt',] },
                include: [{
                    model: EleitorModel,
                    attributes: [
                        'id', 
                        'cpf', 
                        'rg',
                        'titulo_eleitor', 
                        'zona',
                        'secao',     
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