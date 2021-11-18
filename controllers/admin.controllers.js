const admin = require("../models/admin");
const service = require("../models/service");
const category = require("../models/category");
const reclamation = require("../models/reclamation");
const user = require("../models/user");
const agent = require("../models/agent");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

/* * * * * * * * * * * * * * * * * * *  *     Register & Login     * * * * * * * * * * * * * * * * * * *  */

// Register Admin
exports.RegisterAdmin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const findAdmin = await admin.findOne({ email });
    if (findAdmin) {
      response.status(400).send({ errors: [{ msg: "email is unique" }] });
    } else {
      const saltRounds = 10;
      const hashedpassword = bcrypt.hashSync(password, saltRounds);
      const newAdmin = new Admin({ ...request.body });
      newAdmin.password = hashedpassword;
      await newAdmin.save();
      response.send({ msg: "register seccess", Admin: newAdmin });
    }
  } catch (error) {
    response.send({ errors: [{ msg: "Can not register the Admin" }] });
  }
};
// Login Admin
exports.LoginAdmin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const findAdmin = await admin.findOne({ email });

    if (!findAdmin) {
      response
        .status(400)
        .send({ errors: [{ msg: "email or password invalid" }] });
    }

    const testPassword = bcrypt.compareSync(password, findAdmin.password);

    if (!testPassword) {
      response
        .status(400)
        .send({ errors: [{ msg: "email email or password invalid" }] });
    }
    const token = jwt.sign(
      {
        _id: findAdmin._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "5h" }
    );

    return response
      .status(200)
      .send({ msg: "login secc", Admin: findAdmin, token });
  } catch (error) {
    response.send({ errors: [{ msg: "Can not login" }] });
  }
};

/* * * * * * * * * * * * * * * * * * *  *     Gere son profil     * * * * * * * * * * * * * * * * * * *  */

// Afficher le compte authetifier de l'admin
exports.getOneAdmin = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const id = decoded._id;
    const findAdmin = await admin.findOne({ id });
    response.send({ msg: "get the Admin", findAdmin });
  } catch (error) {
    response.status(400).send({ msg: "can not get the Admin" });
  }
};

// uppdate le compte authetifier de l'admin
exports.updateAdmin = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const saltRounds = 10;
    const hashedpassword = bcrypt.hashSync(request.body.password, saltRounds);
    request.body.password = hashedpassword;
    await Admin.updateOne({ _id: decoded._id }, { $set: { ...request.body } });
    response.send({ msg: "updated succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not update" });
  }
};

// Delete le compte authetifier de l'admin
exports.deleteAdmin = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    let result = await Admin.deleteOne({ _id: decoded._id });
    response.send({ msg: "deleted succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Users     * * * * * * * * * * * * * * * * * * * * *  */

// Verified a user (admin)
exports.VerifyUser = async (request, response) => {
  try {
    const { id } = request.params;
    await user.updateOne({ _id: id }, { $set: { ...request.body } });
    response.send({ msg: "user verified" });
  } catch (error) {
    response.status(400).send({ msg: "can not verified" });
  }
};

// get All user by role(admin)
exports.getAllUserRole = async (request, response) => {
  try {
    const Userlist = await user.find();
    response.send({ msg: `get all User`, Userlist });
  } catch (error) {
    response.status(400).send({ msg: "can not get Clients", error });
  }
};

// get All Agent user by service (admin)
exports.getAllAgent = async (request, response) => {
  try {
    const AgentList = await agent
      .find()
      .populate("id_agent")
      .populate("id_service")
      .populate("id_category");
    response.send({ msg: "get all agent", AgentList });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents", error });
  }
};

// delete a user (admin)
exports.deleteUserByAdmin = async (request, response) => {
  try {
    const { id } = request.params;
    let result = await user.deleteOne({ _id: id });
    let rusult1 = await agent.deleteOne({ id_agent: id });
    response.send({ msg: "deleted succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
    console.log(error);
  }
};

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Categorie    * * * * * * * * * * * * * * * * * * * * *  */

// Add a category (admin)
exports.addCategory = async (request, response) => {
  try {
    const { nom } = request.body;
    const { Oneservice } = request.body;
    console.log("Bodyyyy : ", request.body);
    const findCategory = await category.findOne({ nom });
    if (findCategory) {
      response.status(400).send({ errors: [{ msg: "Category existe" }] });
    } else {
      const findService = await service.findOne({ Oneservice });
      console.log("find service  : ", findService);
      const newCategory = new category({
        ...request.body,
        id_service: findService._id,
      });
      await newCategory.save();
      response.send({ msg: "register seccess", Category: newCategory });
    }
  } catch (error) {
    response.send({ errors: [{ msg: "Can not register the Service" }] });
    console.log(error);
  }
};

// updet a category (admin)
exports.updateCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const { nom } = request.body;
    const findCategory = await category.findOne({ nom });
    if (findCategory) {
      response.status(400).send({ errors: [{ msg: "Category existe" }] });
    } else {
      await category.updateOne({ _id: id }, { $set: { ...request.body } });
      response.send({ msg: "updated succ" });
    }
  } catch (error) {
    response.send({ errors: [{ msg: "Can not register the Agent" }] });
    console.log(error);
  }
};

//delete a category (admin)
exports.deleteCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const findCategory = await category.findOne({ _id: id });
    if (findCategory) {
      let result = await category.deleteOne({ _id: id });
      response.send({ msg: "deleted succ" });
    } else {
      response.status(400).send({ errors: [{ msg: "Category n'existe pas" }] });
    }
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

// get Categorys for one service (admin)
exports.getCategory = async (request, response) => {
  try {
    const findCategory = await category.find().populate("id_service");
    response.send({ msg: "get the Category", findCategory });
  } catch (error) {
    response.status(400).send({ msg: "can not get" });
  }
};

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Service    * * * * * * * * * * * * * * * * * * * * *  */

// Add a Service (admin)
exports.addService = async (request, response) => {
  try {
    const { nom } = request.body;
    const findService = await service.findOne({ nom });
    if (findService) {
      response.status(400).send({ errors: [{ msg: "Service existe" }] });
    } else {
      const newService = new service({
        ...request.body,
        imageName: request.file.filename,
      });
      await newService.save();
      response.send({ msg: "register seccess", Service: newService });
    }
  } catch (error) {
    response.send({ errors: [{ msg: "Can not register the Service" }] });
    console.log(error);
  }
};

// updet a Service (admin)
exports.updateService = async (request, response) => {
  try {
    const { id } = request.params;
    const { nom } = request.body;
    const findService = await service.findOne({ nom });
    if (findService) {
      response.status(400).send({ errors: [{ msg: "Service existe" }] });
    } else {
      await service.updateOne({ _id: id }, { $set: { ...request.body } });
      response.send({ msg: "updated succ" });
    }
  } catch (error) {
    response.send({ errors: [{ msg: "Can not register the Agent" }] });
    console.log(error);
  }
};

//delete a Service (admin)
exports.deleteService = async (request, response) => {
  try {
    const { id } = request.params;
    const findService = await service.findOne({ _id: id });
    if (findService) {
      let deleteService = await service.deleteOne({ _id: id });
      let deleteCategory = await category.deleteMany({ id_service: id });
      response.send({ msg: "deleted succ" });
    } else {
      response.status(400).send({ errors: [{ msg: "Service n'existe pas" }] });
    }
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

// get All Service (admin)
exports.getAllService = async (request, response) => {
  try {
    const findService = await service.find();
    response.send({ msg: "get All Service", findService });
  } catch (error) {
    response.status(400).send({ msg: "can not get" });
  }
};

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Reclamation     * * * * * * * * * * * * * * * * * * * * *  */

// Afficher les reclamation par etat (admin)
exports.getReclamation = async (request, response) => {
  try {
    const findReclamation = await reclamation.find();
    response.send({ msg: "get All Reclamation", findReclamation });
  } catch (error) {
    response.status(400).send({ msg: "can not get" });
  }
};

// traiter une reclamation (admin)
exports.updateReclamation = async (request, response) => {
  try {
    const { id } = request.params;
    await reclamation.updateOne({ _id: id }, { $set: { ...request.body } });
    response.send({ msg: "updated succ" });
  } catch (error) {
    response.send({ errors: [{ msg: "Can not appdate the reclamation" }] });
    console.log(error);
  }
};

//delete a Reclamtion (admin)
exports.deleteReclamation = async (request, response) => {
  try {
    const { id } = request.params;
    let deleteReclamation = await reclamation.deleteOne({ _id: id });
    response.send({ msg: "deleted succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};
