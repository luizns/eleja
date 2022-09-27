import EleitorModel from "../../models/Eleitores/EleitorModel";

export default class DeleteEleitorService {
  constructor() {}

  async delete(idEleitor) {
    try {
      const eleitor = await EleitorModel.findByPk(idEleitor);
      
      if (!eleitor) {
        return { message: "Eleitor não encontrado com id: " + idEleitor };
      }

      const nomeEleitor = eleitor.get("nome");
      await eleitor.destroy();

      return {
        mensagem: "O eleitor foi removido com sucesso!",
        nomeEleitor: nomeEleitor,
        idEleitor: idEleitor,
      };
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
