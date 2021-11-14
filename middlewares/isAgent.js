const jwt = require("jsonwebtoken");

const isAgent = async (request, response, next) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const findUser = await user.findById(decoded._id);
    if (findUser.role == "Agent") {
      next();
    } else {
      return response.status(401).send({ errors: [{ msg: "Not Agent " }] });
    }
  } catch (error) {
    return response.status(401).send({ errors: [{ msg: "Not Agent " }] });
  }
};

module.exports = isAgent;
