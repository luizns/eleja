import EleitorModel from "../../models/Eleitores/EleitorModel";

export default class UpdateEleitorService {
  constructor() {}

  async update(
    idEleitor,
    cpf,
    titulo_eleitor,
    rg,
    idade,
    id_usuario) {
    try {
      const eleitor = await EleitorModel.findByPk(idEleitor);

      if (!eleitor) {
        return { mensagem: "Usuário não localizado com id: " + idEleitor };
      }

      const [numeroRegistrosAtualizado] = await EleitorModel.update(
        {
            cpf,
            titulo_eleitor,
            rg,
            idade,
            id_usuario
        },

        {
          where: { idEleitor },
        }
      );

      if (numeroRegistrosAtualizado === 0) {
        return {
          mensagem: "Nenhuma alteração realizada, os dados são iguais!",
        };
      } else {
        return {
          mensagem: "Eleitor atualizado com sucesso!",
            cpf,
            titulo_eleitor,
            rg,
            idade,
            id_usuario
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
