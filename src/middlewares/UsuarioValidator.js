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
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Senha deve conter pelo menos 8 caracteres, uma letra Maiúscula, um número e um caracteres especial"),
        confirmSenha: yup
        .string()
        .required("Por favor confirme sua senha")
        .oneOf([yup.ref('senha'), null], "Senha não combina.")    
        .max(16, "Para uma senha válida, são necessários no máximo 16 caracteres."),

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