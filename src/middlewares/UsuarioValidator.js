import * as yup from "yup";

async function UsuarioValidator(request, response, next) {
    const schema = yup.object().shape({
        nome: yup
            .string()
            .strict()
            .required("Nome é obrigatório."),
        email: yup
            .string()
            .email()
            .required("E-mail é obrigatório."),
        senha: yup
            .string()
            .required("Senha é obrigatória.")
            .min(8, "Para uma senha válida, são necessários no mínimo 8 caracteres.")
            .max(16, "Para uma senha válida, são necessários no máximo 16 caracteres.")
    });

    try{
        await schema.validate(request.body)
    }
    catch(err) {
        return response.status(400).json({
            message: err.errors
        });
    };

    next();  
}

export default UsuarioValidator;