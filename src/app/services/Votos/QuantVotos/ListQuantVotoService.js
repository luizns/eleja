import RegistroVotoModel from "../../../models/Votos/RegistroVotoModel";

export default class ListarQuantVotosService {
    constructor() {}

    async contagemDeVotos(numero) {
        try {
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
