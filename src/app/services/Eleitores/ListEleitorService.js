import EleitorModel from "../../models/Eleitores/EleitorModel";

export default class ListEleitorService {
  constructor() {}

  async listAll(nomeEleitor) {
    try {
      if (nomeEleitor) {
        return await this.listOne(nomeEleitor);
      }
      const eleitores = await EleitorModel.findAll();
      return eleitores;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
  async listOne(nomeEleitor) {
    try {
      const eleitor = await EleitorModel.findOne({
        where: {
          nome: nomeEleitor,
        },
      });

      if (!eleitor) {
        return {
          mesagem: "Eleitor não localizado com o nome: " + nomeEleitor,
        };
      }

      return eleitor;
      
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
