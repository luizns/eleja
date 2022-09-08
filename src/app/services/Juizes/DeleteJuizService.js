import JuizModel from "../../models/Juizes/JuizModel";
export default class DeleteJuizService {
  constructor() {}

  async delete(idJuiz) {
    try {
      const juiz = await JuizModel.findByPk(idJuiz);
      
      if (!juiz) {
        return { message: "Juíz não encontrado com id: " + idJuiz };
      }

      const nomeJuiz = juiz.get("nome");
      await juiz.destroy();

      return {
        mensagem: "O juíz foi removido com sucesso!",
        nomeJuiz: nomeJuiz,
        idJuiz: idJuiz,
      };
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
