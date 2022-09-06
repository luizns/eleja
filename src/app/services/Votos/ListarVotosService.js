import VotoModel from '../../models/Votos/VotoModel';

export default class ListVotoService {
    constructor() { }


    async listarTodos() {
        try {
            const votos = await VotoModel.findAll()
            
            return votos;
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}