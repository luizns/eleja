import EleitorModel from '../../models/Eleitores/EleitorModel';

export default class CreateEleitorService {

    constructor() {}

    async create (
        cpf,
        titulo_eleitor,
        rg,
        usuario_id
    ) {
        try{
            const newEleitor = await EleitorModel.create({    
                cpf,
                titulo_eleitor,
                rg,
                usuario_id
            });


            return newEleitor;
        } catch(error){
            return { erro: error};
        }         
    }
}