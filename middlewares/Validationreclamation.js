const { check, validationResult } = require("express-validator");


exports.RegisterReclamationValidation = () => [
    check('nom' , 'Nom obligatoire').notEmpty(),
    check('email' , 'Email invalide').isEmail(),
    check('message' , 'message obligatoire').notEmpty(),
];

exports.Reclamationvalidation = (request,response,next) =>{
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({ errors : errors.array()})
    }
    next();
}