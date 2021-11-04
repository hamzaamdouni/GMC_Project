const { check, validationResult } = require("express-validator");


exports.RegisterCategoryValidation = () => [
    check('nom' , 'nom obligatoire').notEmpty(),
];

exports.Categoryvalidation = (request,response,next) =>{
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({ errors : errors.array()})
    }
    next();
}