const { validationResult, body } = require("express-validator");

exports.RegisterUserValidation = () => [
  body("nom", "Nom obligatoire").notEmpty(),
  body("prenom", "Prenom obligatoire").notEmpty(),
  body("email", "Email invalide").isEmail(),
  body("password", "Mot de passe minimum 8 character").isLength({ min: 8 }),
  body("phone", "Phone obligatoire").notEmpty(),
  body("adress", "Adresse obligatoire").notEmpty(),
  body("role", "Role obligatoire").notEmpty(),
];

exports.LoginUserValidation = () => [
  body("email", "Email invalide").isEmail(),
  body("password", "Mot de passe minimum 8 character").isLength({ min: 8 }),
];

exports.Uservalidation = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  next();
};
