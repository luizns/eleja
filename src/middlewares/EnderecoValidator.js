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
            .required("Cep é obrigatório."),

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