const { check, validationResult } = require("express-validator");


exports.RegisterServiceValidation = () => [
    check('nom' , 'nom obligatoire').notEmpty(),
];

exports.Servicevalidation = (request,response,next) =>{
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({ errors : errors.array()})
    }
    next();
}