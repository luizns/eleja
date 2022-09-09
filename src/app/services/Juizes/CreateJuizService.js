import JuizModel from '../../models/Juizes/JuizModel';

export default class CreateJuizService {
    async create (matricula, usuario_id) {
        try{
            const newJuiz = await JuizModel.create({    
                matricula,
                usuario_id
            });
            
            return { 
                Id :`${newJuiz.dataValues['id']}`,
                Matricula :`${newJuiz.dataValues['matricula']}`,};
        } catch(error){
            return { erro: error};
        }     
    }
}