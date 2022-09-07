import ZonaEnderecoEleitorModel from "../../models/Enderecos/ZonaEnderecoEleitorModel";

export default class DeleteZonaService {
  constructor() {}

  async delete(idZona) {
    try {
      const zona = await ZonaEnderecoEleitorModel.findByPk(idZona);

      if (!zona) {
        return { mensagem: "Zona eleitoral não localizada com id: " + idZona };
      }

      const numeroSecao = zona.get("secao");
      const numeroZona = zona.get("numero_zona");
      await zona.destroy();

      return {
        mensagem: "A zona eleitoral foi removida com sucesso!",
        numeroSecao: numeroSecao,
        numeroZona:numeroZona,
     };
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
