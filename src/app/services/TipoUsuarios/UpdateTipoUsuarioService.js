import TipoUsuarioModel from '../../models/Usuarios/TipoUsuarioModel';

export default class UpdateTipoUsuarioService {
    constructor() { }

    async update(id, descricao) {
        try {
            const tipo = TipoUsuarioModel.findByPk(id);

            if (!tipo) {
                return { mensagem: "Tipo não encontrado" };
            }

            const [numeroDeRegistros] = await TipoUsuarioModel.update({ descricao }, {
                where: { idTipo: id }
            });

            if (numeroDeRegistros === 0) {
                return { mensagem: "Dados iguais" }
            } else {
                return { id, descricao }
            }

        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}