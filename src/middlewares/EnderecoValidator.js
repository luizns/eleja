const yup = require('yup');

async function EnderecoValidator(request, response, next) {
    const schema = yup.object().shape({
        estado: yup
            .string()
            .required("Estado é obrigatório"),
        cep: yup
            .string()
            .required("Cep é obrigatório."),
        cidade: yup
            	.string()
            .required("Cidade é obrigatório."),
        bairro: yup
            .string()
            .required("Bairro é obrigatório."),
        rua: yup
            .string()
            .required("Rua é obrigatório."),        
        numero: yup
            .string()
            .required("Número é obrigatório."),
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

export default EnderecoValidator;