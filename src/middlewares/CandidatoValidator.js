const yup = require('yup');

async function candidatoValidator(request, response, next) {
    const schema = yup.object().shape({
        nomeCandidato: yup
            .string()
            .strict()
            .required("Nome é obrigatório.")
            .min(5, "Nome deve ter no mínimo 5 caracteres."),        
        numero: yup
            .string()
            .required("Número é obrigatória.")
            .min(2, "Número do candidato deve ter no mínimo 2 digítos.")
            .max(5, "Número do candidato não deve ter mais que 5 digítos."),
        idPartido: yup
            .string()
            .required("Id do partido é obrigatório."),
        idJuizEleitoral: yup
            .string()
            .required("Id do juíz eleitoral é obrigatório."),
        idCandidatoVoto: yup
            .string()
            .required("Id do voto é obrigatório.")        
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

export default candidatoValidator;