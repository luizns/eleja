import JuizModel from "../../models/Juizes/JuizModel";

export default class ListJuizService {
  constructor() {}

  async listAll(matricula) {
    try {
      if (matricula) {
        return await this.listOne(matricula);
      }
      const juizes = await JuizModel.findAll();
      return juizes;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
  async listOne(matricula) {
    try {
      const juiz = await JuizModel.findOne({
        where: {
          matricula: matricula,
        },
      });

      if (!juiz) {
        return {
          mesagem: "Matricula não localizado com o nome: " + matricula,
        };
      }

      return juiz;
      
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
