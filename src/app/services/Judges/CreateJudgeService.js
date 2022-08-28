import { v4 } from 'uuid';
import JudgeModel from '../models/JudgeModel';

const CreateJudgeService = {
    create: (
        id,
        name,
        email,
        password,
        matricula
        ) => {
        const newJudge = new UserModel(
            v4(),
            name,
            email,
            password,
            matricula
        );

        return {
            sucess: true,
            message: "Usuario criado com sucesso - ID: " + newJudge.id
        }
    }
}

export default CreateJudgeService;