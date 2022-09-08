import ZonaModel from '../../models/Enderecos/ZonaEnderecoEleitorModel';
const { Op } = require("sequelize");

export default class ListZonaService {
  constructor() {}

  async listAll(zona) {
    try {
      if (zona) {
        return await this.listOne(zona);
      }
      const zonas = await ZonaModel.findAll();
      return zonas;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listOne(dadoZona) {
    try {
      const zona = await ZonaModel.findOne({
        where: {
          [Op.or]: [
            { secao: { [Op.like]: "%" + dadoZona + "%" } },
            { numero_zona: { [Op.like]: "%" + dadoZona + "%" } },
          ],
        },
      });

      if (!zona) {
        return {
          mensagem: "Zona Eleitoral não localizada com o nome: " + dadoZona,
        };
      }
      return zona;
    } catch (error) {
      console.log(error);
      return { erro: error };
    }
  }
}
