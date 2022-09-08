const yup = require('yup');

export default async function EleitorValidator(request, response, next) {
    const schema = yup.object().shape({
        cpf: yup
            .string()
            .required("CPF é obrigatório.")
            .matches(
                /^(\d{3}\.\d{3}\.\d{3}\-\d{2}$)/,
                "Não se encaixa no padrao de CPF"),    
        titulo_eleitor: yup
            .string()
            .required("Titulo é obrigatório.")
            .matches(
                /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\ [0-9]{4}\ [0-9]{4}$)/,
                "Não se encaixa no padrão"),
        rg: yup
        .string()
        .required("RG é obrigatório.")
        .min(7, "RG não válido, RG deve ter 9 digítos.")
        .max(9, "RG não válido, RG deve ter 9 digítos.")  
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