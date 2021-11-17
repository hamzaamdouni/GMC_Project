const { check, validationResult } = require("express-validator");

exports.RegisterAgentValidation = () => [
  check("calification", "Calification obligatoire").notEmpty(),
  check("experience", "Experience obligatoire").notEmpty(),
  check("description", "Description obligatoire").notEmpty(),
];

exports.Agentvalidation = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  next();
};
