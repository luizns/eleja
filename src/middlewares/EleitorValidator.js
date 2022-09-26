const yup = require('yup');

async function eleitorValidator(request, response, next) {
    const schema = yup.object().shape({
        cpf: yup
            .string()
            .required("CPF é obrigatório.")
            .min(11, "CPF não válido, CPF deve ter 11 digítos.")
            .max(11, "CPF não válido, CPF deve ter 11 digítos.")
            .matches(/^([0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}$)/,
                "Favor inserir somente números para CPF."),      
        titulo_eleitor: yup
            .string()
            .required("Titulo é obrigatório.")
            .min(12, "Titulo não válido, Titulo deve ter 12 digítos.")
            .max(12, "Titulo não válido, Titulo deve ter 12 digítos.")
            .matches(/^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\ [0-9]{4}\ [0-9]{4}$)/,
                "Favor inserir somente números para TÍTULO"),
        rg: yup
            .string()
            .required("RG é obrigatório.")
            .min(9, "RG não válido, RG deve ter 9 digítos.")
            .max(9, "RG não válido, RG deve ter 9 digítos.")
            .matches(/^([0-9]{2}[0-9]{3}[0-9]{3}[0-9]{1}$)/,
                "Favor inserir somente números para RG")

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

export default eleitorValidator;