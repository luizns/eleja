import ListJuizService from './ListJuizService';

export default class UpdateJuizService {

    constructor() {
        this.service = new ListJuizService();
    }

    Update (
        id,
        name,
        email,
        password,
    ) {
        const juizes = this.service.listAll()
        const juizIndex = juizes.findIndex(juiz => juiz.id === Number(id))

        if (juizIndex === -1) {
            return {
                message: "ID não referente a qualquer juíz."
            }
        }

        juizes[juizIndex] = {
            id,
            name,
            email,
            password
        }

        return {
            id,
            ...juizes[juizIndex]
        }
    }
}