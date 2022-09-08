import UpdateZonaService from "../../services/Zonas/UpdateZonaService";

export default class UpdateZonaController {
  constructor() {
    this.service = new UpdateZonaService();
  }

  async update(req, res) {
    const { idZona } = req.params;
    const { numero_zona, secao } = req.body;

    const updatedZona = await this.service.update(idZona, numero_zona, secao);

    res.json(updatedZona);
  }
}
