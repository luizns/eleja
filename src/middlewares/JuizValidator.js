const yup = require('yup');

export default async function JuizValidator(request, response, next) {
    const schema = yup.object().shape({
        matricula: yup
        .string()
        .required("matrícula é obrigatória.")        
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

// export default UserValidator;