const yup = require('yup');

export default async function JuizValidator(request, response, next) {
    const schema = yup.object().shape({
        id_usuario: yup
            .string()
            .required("O identificado do usuário  é obrigatório."),        
        matricula: yup
        .string()
        .required("A matrícula é obrigatória.")        
    });

    await schema.validate(request.body).catch((err) => {
        return response.status(400).json({
            message: err.errors
        });
    });

    next();
}

// export default UserValidator;