import { v4 } from 'uuid';
import JuizModel from '../../models/Juizes/JuizModel';

export default class CreateJuizService {
    create (
        id,
        name,
        email,
        password,
        matricula
        ) {
        const newJuiz = new JuizModel(
            v4(),
            name,
            email,
            password,
            matricula
        );
        
        return {
            sucess: true,
            message: "Usuario criado com sucesso - ID: " + newJuiz.id
        }
    }
}