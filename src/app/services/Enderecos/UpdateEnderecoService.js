import EnderecoModel from "../../models/Enderecos/EnderecoEleitorModel";
export default class UpdateEnderecoService {
  constructor() {}
  async update(
    idEndereco,
    rua,
    bairro,
    numero,
    cidade,
    cep,
    id_eleitor,
    id_zona
  ) {
    try {
      const endereco = await EnderecoModel.findByPk(idEndereco);

      if (!endereco) {
        return { mensagem: "Endereço não localizado com id: " + idEndereco };
      }

      const [numeroRegistrosAtualizado] = await EnderecoModel.update(
        {
          idEndereco,
          rua,
          bairro,
          numero,
          cidade,
          cep,
          id_eleitor,
          id_zona,
        },
        {
          where: { idEndereco },
        }
      );
      if (numeroRegistrosAtualizado === 0) {
        return {
          mensagem: "Nenhuma alteração realizada, os dados são iguais!",
        };
      } else {
        return {
          mensagem: "Endereço atualizado com sucesso!",
          rua: rua,
          bairro: bairro,
          numero: numero,
          cidade: cidade,
          cep: cep,
          id_eleitor: id_eleitor,
          id_zona: id_zona,
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
