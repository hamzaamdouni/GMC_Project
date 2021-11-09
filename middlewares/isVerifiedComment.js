const isVerifiedComment = (request, response, next) => {
  if (request.comment.etat == "Verified") {
    next();
  } else {
    return response.status(401).send({ errors: [{ msg: "Not Authorized" }] });
  }
};

module.exports = isVerifiedComment;
