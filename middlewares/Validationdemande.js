const { check, validationResult } = require("express-validator");

exports.RegisterCommentValidation = () => [
  check("message", "nom obligatoire").notEmpty(),
];

exports.Commentvalidation = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  next();
};
