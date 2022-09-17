const yup = require('yup');

async function quantVotoValidator(request, response, next) {
    const schema = yup.object().shape({
        

    });

    try{
        await schema.validate(request.body)
    }catch(err)  {
        return response.status(400).json({
            message: err.errors
        });
    };

    next();
}

export default quantVotoValidator;