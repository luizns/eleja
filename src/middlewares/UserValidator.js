const yup = require('yup');

async function UserValidator(request, response, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .min(10, "O nome deve ser completo.")
            .strict()
            .required("Nome é obrigatório.")
            .typeError("Nome deve ser do tipo string"),
        cpf: yup
            .string()
            .strict()
            .required("CPF é obrigatório.")
            .length(11, "Você deve digitar 11 caracteres para o CPF.")
            .typeError("CPF deve ser do tipo string"),
        rg: yup
            .string()
            .strict()
            .min(5, "Para cadastrar o RG, são necessários no mínimo 5 caracteres.")
            .typeError("RG deve ser do tipo string"),
        titulo: yup
            .string()
            .strict()
            .min(8, "Para cadastrar o Título de Eleitor, são necessários no mínimo 8 caracteres.")
            .typeError("Título de eleitor deve ser do tipo string"),
        password: yup
            .string()
            .strict()
            .required("Senha é obrigatória.")
            .min(8, "Para uma senha válida, são necessários no mínimo 8 caracteres.")
            .max(16, "Para uma senha válida, são necessários no máximo 16 caracteres.")
            .typeError("Senha deve ser do tipo string")
    })

    await schema.validate(request.body).catch(err => {
        return response.status(400).json({
            message: err.errors
        });
    });

    next();
}

module.exports = UserValidator;