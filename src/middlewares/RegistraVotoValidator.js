import RegistroVotoModel from "../app/models/Votos/RegistroVotoModel";

async function registraVotoValidator(req, res, next){
    try{
        const {id_eleitor,numero_candidato} = req.body;
        const votoEleitor = await RegistroVotoModel.findOne({ 
            where: { id_eleitor}});
            
            if(votoEleitor){
            
                return res.status(406).json({erro:"Atenção o eleitor já votou!"});  
            }
        next();
            
    }catch(error){
        console.log(error);
        return{ erro: error.message };
    }
    
  }

export default registraVotoValidator;