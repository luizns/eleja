const yup = require('yup');

export default async function JudgeValidator(request, response, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .strict()
            .required("Nome é obrigatório."),        
        password: yup
            .string()
            .required("Senha é obrigatória.")
            .min(8, "Para uma senha válida, são necessários no mínimo 8 caracteres.")
            .max(16, "Para uma senha válida, são necessários no máximo 16 caracteres."),
        matricula: yup
        .string()
        .required("matrícula é obrigatória.")        
    });

    await schema.validate(request.body).catch((err) => {
        return response.status(400).json({
            message: err.errors
        });
    });

    next();
}

// export default UserValidator;