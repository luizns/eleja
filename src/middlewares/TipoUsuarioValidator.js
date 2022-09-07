const yup = require('yup');

async function TipoUsuarioValidator(request, response, next) {
    const schema = yup.object().shape({
        descricao: yup
            .string()
            .required("Descrição é obrigatório")
            .max(15, "Para uma descrição válida, são necessários no máximo 15 caracteres.")

    });

    try{
        await schema.validate(request.body)
    } catch(err) {
        return response.status(400).json({
            message: err.errors
        });
    };

    next();
}

export default TipoUsuarioValidator;