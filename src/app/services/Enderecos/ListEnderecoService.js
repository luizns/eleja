import EnderecoModel from "../../models/Enderecos/EnderecoEleitorModel";
const { Op } = require("sequelize");

export default class ListEnderecoService {
  constructor() {}

  async listAll(endereco) {
    try {
      if (endereco) {
        return await this.listOne(endereco);
      }
      const enderecos = await EnderecoModel.findAll();
      return enderecos;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listOne(dadoEndereco) {
    try {
      const endereco = await EnderecoModel.findOne({
        where: {
          [Op.or]: [
            { rua: { [Op.like]: "%" + dadoEndereco + "%" } },
            { cep: { [Op.like]: "%" + dadoEndereco + "%" } },
            { bairro: { [Op.like]: "%" + dadoEndereco + "%" } },
            { numero: { [Op.like]: "%" + dadoEndereco + "%" } },
            { cidade: { [Op.like]: "%" + dadoEndereco + "%" } },
          ],
        },
      });

      if (!endereco) {
        return {
          mensagem: "Endereço não localizado com o nome: " + dadoEndereco,
        };
      }
      return endereco;
    } catch (error) {
      console.log(error);
      return { erro: error };
    }
  }
}
