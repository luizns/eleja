const yup = require('yup');

async function enderecoValidator(request, response, next) {
    const schema = yup.object().shape({
        rua: yup
            .string()
            .required("Rua é obrigatório."),        
        bairro: yup
            .string()
            .required("Bairro é obrigatório."),
        numero: yup
            .string()
            .required("Número é obrigatório."),
        cidade: yup
            .string()
            .required("Cidade é obrigatório."),
        cep: yup
            .string()
            .required("CEP é obrigatório.")
            .min(8, "Favor inserir no mínimo 8 dígitos")
            .max(8, "Favor inserir no máximo 8 dígitos")
            .matches(/^([0-9]$)/, "Favor inserir somente números para CEP!"),

    });

    try{
        await schema.validate(request.body)
    } catch(err){
        return response.status(400).json({
            message: err.errors
        });
    };

    next();
}

export default enderecoValidator;