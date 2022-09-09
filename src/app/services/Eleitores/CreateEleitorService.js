import EleitorModel from '../../models/Eleitores/EleitorModel';

export default class CreateEleitorService {

    constructor() {}

    async create (
        cpf,
        rg,
        titulo_eleitor,
        zona,
        secao,
        usuario_id
    ) {
        try{
            const newEleitor = await EleitorModel.create({    
                cpf,
                rg,
                titulo_eleitor,
                zona,
                secao,
                usuario_id
            });

            console.log(newEleitor)

            return {
                id: `${newEleitor.dataValues['id']}`,
                CPF: `${newEleitor.dataValues['cpf']}`,
                titulo_eleitor: `${newEleitor.dataValues['titulo_eleitor']}`,
                RG: `${newEleitor.dataValues['rg']}`,
                Zona: `${newEleitor.dataValues['zona']}`,
                Secao: `${newEleitor.dataValues['secao']}`,
                };
        } catch(error){
            return { erro: error};
        }         
    }
}