import EleitorModel from '../../models/Eleitores/EleitorModel';
import EnderecoModel from '../../models/Enderecos/EnderecoModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';


export default class ListEnderecoService {
    
    constructor() {}
   
    async listAll(){
        try{

            const usuarioEleitorEndereco = await UsuarioModel.findAll({
                attributes: { exclude: ['senha', 'createdAt', 'updatedAt', 'tipo_usuario_id'] },
                include: [{                    
                    model: EleitorModel,
                    attributes: [
                        'id', 
                        'cpf', 
                        'titulo_eleitor', 
                        'rg',
                    ],
                    association: 'eleitores',
                    include: [{
                        model: EnderecoModel,
                        attributes: [
                            'id', 
                            'estado', 
                            'cep', 
                            'cidade', 
                            'bairro',
                            'rua', 
                            'numero',
                        ],
                    association: 'endereco_eleitores', 
                    right: true,               
                }],
                }]
            });

            
            return usuarioEleitorEndereco;
        } catch(error) {
            return { erro: error.message }
        }
    } 
    
}