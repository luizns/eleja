import * as yup from 'yup';

async function IndexValidator(request, response, next) {
    const schema = yup.object().shape({
        idPartido: yup
            .string("Neste caso, só será aceito ID do tipo STRING.")
            
    });

    await schema.validate(request.params).catch(err => {
        return response.status(400).json({
            message: err.errors
        });
    });

    next();
}

export default IndexValidator;
