import CandidatoModel from "../../models/Candidatos/CandidatoModel";
export default class DeleteCandidatoService {
  constructor() {}

  async delete(idCandidato) {
    try {
      const candidato = await CandidatoModel.findByPk(idCandidato);
      
      if (!candidato) {
        return { message: "Candidato não encontrado com id: " + idCandidato };
      }

      const nomeCandidato = candidato.get("nome");
      await candidato.destroy();

      return {
        mensagem: "O candidato foi removido com sucesso!",
        nomeCandidato: nomeCandidato,
        idCandidato: idCandidato,
      };
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
