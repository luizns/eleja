import EnderecoModel from "../../models/Enderecos/EnderecoEleitorModel";

export default class DeleteEnderecoService {
  constructor() {}

  async delete(idEndereco) {
    try {
      const endereco = await EnderecoModel.findByPk(idEndereco);

      if (!endereco) {
        return { messagem: "Endereço não encontrado com id: " + idEndereco };
      }

      const nomeRua = endereco.get("rua");
      const nomeBairro = endereco.get("bairro");
      const nomeCidade =endereco.get("cidade");
      const numeroCep=endereco.get("cep");
      await endereco.destroy();

      return {
        mensagem: "O endereço foi removido com sucesso!",
        nomeRua: nomeRua,
        nomeBairro:nomeBairro,
        nomeCidade: nomeCidade,
        numeroCep:numeroCep,
        idEndereco: idEndereco,
      };
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
