import JuizEleitoralModel from '../../models/Juizes/JuizModel';

export default class DeleteEleitorService {

    constructor() { }

    async delete(id) {
        try {
            const juiz = await JuizEleitoralModel.findByPk(id);
      
            await juiz.destroy();
        
            return { message: "Dados do eleitor deletado!"};
        } catch (error) {
            return { erro: error.message };
        }
    }
}