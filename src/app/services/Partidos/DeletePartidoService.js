import PatidoModel from "../../models/Partidos/PartidoModel";

export default class DeletePartidoService {
  constructor() {}

  async delete(idPartido) {
    try {
      const partido = await PatidoModel.findByPk(idPartido);

      if (!partido) {
        return { messagem: "Partido não encontrado com id: " + idPartido };
      }
      const nomePartido = partido.get("nome_partido");
      await partido.destroy();

      return {
        mensagem: "O partido foi removido com sucesso!",
        nomePartido: nomePartido,
        idPartido: idPartido,
      };
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
