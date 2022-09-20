import CreateRegistraVotoService from "../../services/RegistarVoto/CreateRegistraVotoService"

export default class CreateRegistraVotoController {
  constructor() {
    this.service = new CreateRegistraVotoService();
  }

  async create(req, res) {
    const {
      id_eleitor,
      numero_candidato,
     } = req.body;
    
    const tokenUsuario=req.headers.authorization.replace("Bearer ","");
   
    const registroVoto = await this.service.create(
      tokenUsuario,
      id_eleitor,
      numero_candidato,
      
    );

    return res.status(201).json(registroVoto);
  }
}
