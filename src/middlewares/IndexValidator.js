const yup = require('yup');

async function IndexValidator(request, response, next) {
    const schema = yup.object().shape({
        id: yup
            .number("Neste caso, só será aceito ID do tipo NÚMERO.")
            .integer("Apenas números inteiros no ID")
            .positive("ID não pode ser um número negativo.")
    });

    await schema.validate(request.params).catch(err => {
        return response.status(400).json({
            message: err.errors
        });
    });

    next();
}

export default IndexValidator;