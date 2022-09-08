import PartidoModel from "../../models/Partidos/PartidoModel";

export default class ListPartidoService {
  constructor() {}
  async listAll(nomePartido) {
    try {
      if (nomePartido) {
        return await this.listOne(nomePartido);
      }
      const partidos = await PartidoModel.findAll();
      return partidos;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listOne(nomePartido) {
    try {
      const partido = await PartidoModel.findOne({
        where: { nome_partido:nomePartido },
      });

      if (!partido) {
        return {
          mensagem: " Partido não localizado com o nome: " + nomePartido,
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error };
    }
  }
}
