import RegistroVotoModel from '../../../models/Votos/RegistroVotoModel';

export default class ListRegistroVotoService {

    async listAll(idEleitor) {
        if (idEleitor) {
            return await RegistroVotoModel.findOne({
                where: { id_eleitor: idEleitor }
            })
        }

        const votos = await RegistroVotoModel.findAll()

        return votos
    }
}