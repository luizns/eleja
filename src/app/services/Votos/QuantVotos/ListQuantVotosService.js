import RegistroVotoModel from "../../../models/Votos/RegistroVotoModel";

export default class ListQuantVotosService {
    constructor() {}

    async count(numero) {
        try {
            if (!numero) {
                return await RegistroVotoModel.findAll();
            }

            const contagem = await RegistroVotoModel.findAll({
                where: { numeroDigitado: numero }
            })

            return contagem.length

        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}
