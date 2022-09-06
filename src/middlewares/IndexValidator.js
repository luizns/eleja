const yup = require('yup')
const ListUserService = require('../app/services/users/ListUserService')

async function IndexValidator(request, response, next) {
    const schema = yup.object().shape({
        id: yup
            .number("Neste caso, só será aceito ID do tipo NÚMERO.")
            .integer("Apenas números inteiros no ID")
            // .strict()
            .positive("ID não pode ser um número negativo.")
            .min(1, "Este ID não se refere a qualquer usuário cadastrado.")
            .max(ListUserService.listAll().length, "Este ID não se refere a qualquer usuário cadastrado.")
            .typeError("Em ID devem ser usados apenas números.")
    })

    await schema.validate(request.params).catch(err => {
        return response.status(400).json({
            message: err.errors
        });
    });

    next();
}

export default IndexValidator