import * as yup from "yup";

async function usuarioValidator(request, response, next) {
    const schema = yup.object().shape({
        nome: yup
            .string()
            .min(10, "O nome deve ser completo.")
            .strict()
            .required("Nome é obrigatório."),
        email: yup
            .string()
            .required("E-mail é obrigatório.")
            .email(),
        senha: yup
            .string()
            .strict()
            .required("Senha é obrigatória.")
            .min(8, "Para uma senha válida, são necessários no mínimo 8 caracteres.")
            .max(16, "Para uma senha válida, são necessários no máximo 16 caracteres.")
            .typeError("Senha deve ser do tipo string")
    })

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

export default usuarioValidator;