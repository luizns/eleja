import CandidatoModel from "../../models/Candidatos/CandidatoModel";

export default class UpdateCandidatoService {
  constructor() {}

  async update(
    idCandidato, 
    nome_candidato,
    numero_candidato,
    id_partido,
    id_juiz_eleitoral,
    id_candidato_voto) {
    try {
      const candidato = await CandidatoModel.findByPk(idCandidato);

      console.log("id", candidato)

      if (!candidato) {
        return { mensagem: "Candidato não localizado com id: " + idCandidato };
      }

      const [numeroRegistrosAtualizado] = await CandidatoModel.update(
        {
          nome_candidato,
          numero_candidato,
          id_partido,
          id_juiz_eleitoral,
          id_candidato_voto
        },

        {
          where: { idCandidato },
        }
      );

      if (numeroRegistrosAtualizado === 0) {
        return {
          mensagem: "Nenhuma alteração realizada, os dados são iguais!",
        };
      } else {
        return {
          mensagem: "Candidato atualizado com sucesso!",
          nome_candidato,
          numero_candidato
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
