import PartidoModel from "../../models/Partidos/PartidoModel";

export default class UpdatePartidoService {
  constructor() {}

  async update(idPartido, nome_partido, sigla, numero_legenda) {
    try {
      const partido = await PartidoModel.findByPk(idPartido);

      if (!partido) {
        return { mensagem: "Partido não localizado com id: " + idPartido };
      }

      const [numeroRegistrosAtualizado] = await PartidoModel.update(
        {
          nome_partido,
          sigla,
          numero_legenda,
        },
        {
          where: { idPartido },
        }
      );
      if (numeroRegistrosAtualizado === 0) {
        return {
          mensagem: "Nenhuma alteração realizada, os dados são iguais!",
        };
      } else {
        return {
          mensagem: "Partido atualizado com sucesso!",
          nome_partido,
          sigla,
          numero_legenda,
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
