import EleitorModel from '../../models/Eleitores/EleitorModel';

export default class DeleteService {

    constructor() { }

    async delete(id) {
        try {
            const eleitor = await EleitorModel.findByPk(id);
      
            await eleitor.destroy();
        
            return { message: "Dados do eleitor deletado!"};
        } catch (error) {
            return { erro: error.message };
        }
    }
}