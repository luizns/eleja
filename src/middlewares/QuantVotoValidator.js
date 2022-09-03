const yup = require('yup');

export default async function QuantVotoValidator(request, response, next) {
    const schema = yup.object().shape({
        

    });

    await schema.validate(request.body).catch((err) => {
        return response.status(400).json({
            message: err.errors
        });
    });

    next();
}

// export default UserValidator;