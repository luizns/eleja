import ZonaModel from "../../models/Enderecos/ZonaEnderecoEleitorModel";
export default class UpdateZonaService {
  constructor() {}
  async update(idZona, secao, numero_zona) {
    try {
      const zona = await ZonaModel.findByPk(idZona);

      if (!zona) {
        return { mensagem: "Zona Eleitoral não localizada com id: " + idZona };
      }

      const [numeroRegistrosAtualizado] = await ZonaModel.update(
        {
          idZona,
          secao,
          numero_zona,
        },
        {
          where: { idZona },
        }
      );
      if (numeroRegistrosAtualizado === 0) {
        return {
          mensagem: "Nenhuma alteração realizada, os dados são iguais!",
        };
      } else {
        return {
          mensagem: "Zona atualizada com sucesso!",
          secao: secao,
          numero_zona: numero_zona,
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
