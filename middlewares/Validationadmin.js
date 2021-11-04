const { check, validationResult } = require("express-validator");


exports.RegisterAdminValidation = () => [
    check('nom' , 'Nom obligatoire').notEmpty(),
    check('prenom' , 'Prenom obligatoire').notEmpty(),
    check('email' , 'Email invalide').isEmail(),
    check('password' , 'Mot de passe minimum 8 character').isLength({min : 8}),
];

exports.LoginAdminValidation = () => [
    check('email' , 'Email invalide').isEmail(),
    check('password' , 'Mot de passe minimum 8 character').isLength({min : 8}),
];

exports.Adminvalidation = (request,response,next) =>{
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({ errors : errors.array()})
    }
    next();
}