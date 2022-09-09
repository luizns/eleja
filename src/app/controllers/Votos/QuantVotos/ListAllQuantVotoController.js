import ListQuantVotosService from '../../../services/Votos/QuantVotos/ListQuantVotosService';

 export default class ListQuantVotosController {
    
        constructor() {
            this.service = new ListQuantVotosService();
        }
    
      async listAll(req, res) {
            
            const {nomeCandidato} = req.query;
    
            const  quantidadeVotos = await this.service.listAll(nomeCandidato);
    
            res.json(quantidadeVotos);
        }
    
    }