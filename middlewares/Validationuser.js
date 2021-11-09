const { check, validationResult } = require("express-validator");

exports.RegisterUserValidation = () => [
  check("nom", "Nom obligatoire").notEmpty(),
  check("prenom", "Prenom obligatoire").notEmpty(),
  check("email", "Email invalide").isEmail(),
  check("password", "Mot de passe minimum 8 character").isLength({ min: 8 }),
  check("phone", "Phone obligatoire").notEmpty(),
  check("adress", "Adresse obligatoire").notEmpty(),
  check("role", "Role obligatoire").notEmpty(),
];

exports.LoginUserValidation = () => [
  check("email", "Email invalide").isEmail(),
  check("password", "Mot de passe minimum 8 character").isLength({ min: 8 }),
];

exports.Uservalidation = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  next();
};
