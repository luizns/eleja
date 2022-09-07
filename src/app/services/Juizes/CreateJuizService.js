import JuizModel from '../../models/Juizes/JuizModel';

export default class CreateJuizService {
    async create (matricula, usuario_id) {
        try{
            const newJuiz = await JuizModel.create({    
                matricula,
                usuario_id
            });
            
            return newJuiz;
        } catch(error){
            return { erro: error};
        }     
    }
}