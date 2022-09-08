import JuizModel from "../../models/Juizes/JuizModel";

export default class UpdateJuizService {
  constructor() {}

  async update(idJuiz, matricula, id_usuario) {
    try {
      const juiz = await JuizModel.findByPk(idJuiz);

      console.log("id", juiz)

      if (!juiz) {
        return { mensagem: "Juíz não localizado com id: " + idJuiz };
      }

      const [numeroRegistrosAtualizado] = await JuizModel.update(
        {
          idJuiz,
          matricula,
          id_usuario,
        },

        {
          where: { idJuiz },
        }
      );

      if (numeroRegistrosAtualizado === 0) {
        return {
          mensagem: "Nenhuma alteração realizada, os dados são iguais!",
        };
      } else {
        return {
          mensagem: "Juíz atualizado com sucesso!",
          matricula,
          id_usuario,
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
