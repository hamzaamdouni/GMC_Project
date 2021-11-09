const user = require("../models/user");
const agent = require("../models/agent");
const reclamation = require("../models/reclamation");
const service = require("../models/service");
const category = require("../models/category");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

/* * * * * * * * * * * * * * * * * * *  *     Register      * * * * * * * * * * * * * * * * * * *  */
// Register user
exports.RegisterUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const findUser = await user.findOne({ email });

    if (findUser) {
      response.status(400).send({ errors: [{ msg: "email is unique" }] });
    } else {
      const saltRounds = 10;
      const hashedpassword = bcrypt.hashSync(password, saltRounds);

      const newUser = new user({ ...request.body });
      newUser.password = hashedpassword;
      await newUser.save();
      response.send({ msg: "register seccess", user: newUser });
    }
  } catch (error) {
    response.send({ errors: [{ msg: "Can not register the User" }] });
  }
};

// Login User
exports.LoginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const findUser = await user.findOne({ email });

    if (!findUser) {
      response
        .status(400)
        .send({ errors: [{ msg: "email or password invalid" }] });
    }

    if (findUser.etat == "NotVerified") {
      response.status(400).send({ errors: [{ msg: "Compte Non verifier" }] });
    }
    const testPassword = bcrypt.compareSync(password, findUser.password);

    if (!testPassword) {
      response
        .status(400)
        .send({ errors: [{ msg: "email email or password invalid" }] });
    }

    const token = jwt.sign(
      {
        _id: findUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "5h" }
    );

    return response
      .status(200)
      .send({ msg: "login secc", user: findUser, token });
  } catch (error) {
    response.send({ errors: [{ msg: "Can not" }] });
  }
};

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Reclamation     * * * * * * * * * * * * * * * * * * * * *  */

// envoyer une reclamation
exports.AddReclamation = async (request, response) => {
  try {
    const newReclamation = new reclamation({ ...request.body });
    await newReclamation.save();
    response.send({ msg: "register seccess", reclamation: newReclamation });
  } catch (error) {
    response.send({ errors: [{ msg: "Can not register the Reclamation" }] });
    console.log(error);
  }
};

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Service & Category    * * * * * * * * * * * * * * * * * * * * *  */

// get All Service
exports.getAllService = async (request, response) => {
  try {
    const findServices = await service.find();
    response.send({ msg: "get All Service", findServices });
  } catch (error) {
    response.status(400).send({ msg: "can not get" });
  }
};

exports.getCategory = async (request, response) => {
  try {
    const { oneservice } = request.params;
    const findService = await service.findOne({ nom: oneservice });
    const { _id } = findService;
    const findCategorys = await category.find({ id_service: _id });
    response.send({ msg: "get all Category", findCategorys });
  } catch (error) {
    response.status(400).send({ msg: "can not get" });
  }
};
