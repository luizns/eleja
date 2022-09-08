import DeleteZonaService from "../../services/Zonas/DeleteZonaService";

export default class DeleteZonaService {
  constructor() {
    this.service = new DeleteZonaService();
  }

  async delete(req, res) {
    const { idZona } = req.params;

    const deletedZona = await this.service.delete(idZona);

    res.send(deletedZona);
  }
}
