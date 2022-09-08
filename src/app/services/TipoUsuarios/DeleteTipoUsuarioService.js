import TipoUsuarioModel from '../../models/Usuarios/TipoUsuarioModel';

export default class DeleteTipoUsuarioService {
    constructor() {}

    async delete(id) {
        try {
            const tipo = await TipoUsuarioModel.findByPk(id)
            
            if (!tipo) {
                return { mensagem: "Tipo não encontrado" };
            }

            const tipoDeletado = await tipo.destroy();

            return tipoDeletado;
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}