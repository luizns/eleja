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

            console.log(newEleitor)

            return {
                id: `${newEleitor.dataValues['id']}`,
                CPF: `${newEleitor.dataValues['cpf']}`,
                titulo_eleitor: `${newEleitor.dataValues['titulo_eleitor']}`,
                RG: `${newEleitor.dataValues['rg']}`,
                usuario_id: `${newEleitor.dataValues['usuario_id']}`
                };
        } catch(error){
            return { erro: error};
        }         
    }
}