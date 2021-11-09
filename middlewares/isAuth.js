const jwt = require("jsonwebtoken");
const user = require("../models/user");

const isAuth = async (request, response, next) => {
  try {
    const token = request.headers["authorization"];
    if (!token) {
      return response
        .status(401)
        .send({ errors: [{ msg: "Not Authorized " }] });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return response
        .status(401)
        .send({ errors: [{ msg: "Not Authorized " }] });
    }

    const findUser = await user.findById(decoded._id);
    request.user = findUser;
    if (findUser) {
      next();
    } else {
      return response.status(401).send({ errors: [{ msg: "Not Authorized" }] });
    }
  } catch (error) {
    return response.status(401).send({ errors: [{ msg: "Not Authorized " }] });
  }
};

module.exports = isAuth;
