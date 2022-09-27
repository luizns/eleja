import EleitorModel from "../../models/Eleitores/EleitorModel";

export default class ListEleitorService {
  constructor() {}

  async listAll(cpfEleitor) {
    try {
      if (cpfEleitor) {
        return await this.listOne(cpfEleitor);
      }

      const eleitores = await EleitorModel.findAll();

      return eleitores;

    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
  
  async listOne(cpfEleitor) {
    try {
      const eleitor = await EleitorModel.findOne({
        where: {
          cpf: cpfEleitor,
        },
      });

      if (!eleitor) {
        return {
          mesagem: "Eleitor não localizado com o cpf: " + cpfEleitor,
        };
      }

      return eleitor;
      
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
