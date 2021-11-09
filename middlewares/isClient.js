const isClient = (request, response, next) => {
  if (request.user.role == "Client") {
    next();
  } else {
    return response.status(401).send({ errors: [{ msg: "Not Authorized" }] });
  }
};

module.exports = isClient;
