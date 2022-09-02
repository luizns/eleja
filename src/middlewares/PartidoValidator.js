const yup = require('yup');

export default async function PartidoValidator(request, response, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .strict()
            .required("Nome é obrigatório.")
            .min(5, "Nome deve ter no mínimo 5 caracteres."),        
        sigla: yup
            .string()
            .required("Sigla é obrigatório.")
            .min(2, "São necessários no mínimo 2 caracteres para sigla."),
        numeroLegenda: yup
        .string()
        .required("Número da legenda é obrigatório.")        
        .min(2, "São necessários no mínimo 2 caracteres para número da legenda.")
        .max(2, "São necessários no máximo 2 caracteres para número da legenda.")
    });

    await schema.validate(request.body).catch((err) => {
        return response.status(400).json({
            message: err.errors
        });
    });

    next();
}

// export default UserValidator;