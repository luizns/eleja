import QuantidadeVotoModel from "../../../models/Votos/QuantVotosCandidatosModel";
const { Op } = require("sequelize");

export default class ListQuantVotosService {
  constructor() {}

  async listAll(nomeCandidato) {
    try {
      if (nomeCandidato) {
        return await this.listOne(nomeCandidato);
      }
      const candidatos = await QuantidadeVotoModel.findAll();
      return candidatos;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
   async listOne(dadoCandidato) {
    try {
      const candidato = await QuantidadeVotoModel.findOne({
        where: {
          idQuantidadeVotosCandidato
        },
      });

      if (!candidato) {
        return {
          mesagem: "Candidato não localizado com o nome: " + dadoUsuario,
        };
      }

      return candidato;
      
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
