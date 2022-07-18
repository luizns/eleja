const yup = require('yup')

async function UserValidator(request, response, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .required("Nome é obrigatório."),
        cpf: yup
            .string()
            .required("CPF é obrigatório.")
            .length(11, "Você deve digitar 11 caracteres para o CPF."),
        rg: yup
            .string()
            .min(5, "Para cadastrar o RG, são necessários no mínimo 5 caracteres."),
        titulo: yup
            .string()
            .min(8, "Para cadastrar o Título de Eleitor, são necessários no mínimo 8 caracteres."),
        password: yup
            .string()
            .required("Senha é obrigatória.")
            .min(8, "Para uma senha válida, são necessários no mínimo 8 caracteres.")
            .max(16, "Para uma senha válida, são necessários no máximo 16 caracteres.")
    })

    await schema.validate(request.body).catch(err => {
        return response.status(400).json({
            message: err.errors
        })
    })

    next()
}

module.exports = UserValidator