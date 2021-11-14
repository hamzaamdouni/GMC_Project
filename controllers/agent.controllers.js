const agent = require("../models/agent");
const user = require("../models/user");
const category = require("../models/category");
const service = require("../models/service");
const comment = require("../models/comment");
const demande = require("../models/demande");

var jwt = require("jsonwebtoken");

/* * * * * * * * * * * * * * * * * * *  *     Gere  profil Agent    * * * * * * * * * * * * * * * * * * *  */

// ajouter profil agent
exports.RegisterAgent = async (request, response) => {
  try {
    const { _id } = request.user;
    const findUser = await agent.findOne({ id_agent: _id });
    const { nomcategory } = request.body;
    const findCategory = await category.findOne({ nom: nomcategory });

    if (findUser) {
      response.status(400).send({ errors: [{ msg: "deja inscrit" }] });
    } else {
      const newAgent = new agent({
        ...request.body,
        id_agent: _id,
        id_service: findCategory.id_service,
        id_category: findCategory._id,
      });
      await newAgent.save();
      response.send({ msg: "register seccess", agent: newAgent });
    }
  } catch (error) {
    response.send({ errors: [{ msg: "Can not register the User" }] });
    console.log(error);
  }
};
// Afficher le compte authetifier de l'agent
exports.GetAgent = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const findAgent = await agent.findOne({ id_agent: decoded._id });
    response.status(200).send({ msg: "GET AGENT Saccess ", findAgent });
  } catch (error) {
    response.status(400).send({ msg: "can not get the Agent" });
    console.log(error);
  }
};
// update le compte authetifier de l'agent
exports.UpdateAgent = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    await agent.updateOne(
      { id_agent: decoded._id },
      { $set: { ...request.body } }
    );
    response.send({ msg: "updated succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not update", usser });
    console.log(error);
  }
};

/* * * * * * * * * * * * * * * * * * *  *     Gere   demande    * * * * * * * * * * * * * * * * * * *  */
// Afficher les demande
exports.GetRequestDemande = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = decoded;
    const findAgent = await agent.findOne({ id_agent: _id });
    const finddemande = await demande
      .find({ id_agent: findAgent._id })
      .populate("id_user");
    response.send({ msg: "Get all request ", finddemande });
  } catch (error) {
    response.status(400).send({ msg: "can not send ", error });
  }
};

// traité une demande (accepte ou refuser)
exports.TraiterDemande = async (request, response) => {
  try {
    const { iddemande } = request.params;
    await demande.updateOne({ _id: iddemande }, { $set: { ...request.body } });
    response.send({ msg: "updated succ" });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not update demande", error });
  }
};
// Supprimer une demande
exports.DeleteRequestDemande = async (request, response) => {
  try {
    const { iddemande } = request.params;
    console.log(iddemande);
    let result = await demande.deleteOne({ _id: iddemande });
    response.send({ msg: "deleted succ" });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not delete" });
  }
};

/* * * * * * * * * * * * * * * * * * *  *     Gere  commentaire    * * * * * * * * * * * * * * * * * * *  */

// Afficher les commentaires
exports.GetComments = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = decoded;
    const findAgent = await agent.findOne({ id_agent: _id });
    const findcomment = await comment
      .find({ id_agent: findAgent._id })
      .populate("id_user");
    response.send({ msg: "Get all comments ", findcomment });
  } catch (error) {
    response.status(400).send({ msg: "can not send ", error });
  }
};

// traité un commentaire (accepte ou refuser)
exports.TraiterComment = async (request, response) => {
  try {
    const { idcomment } = request.params;
    await comment.updateOne({ _id: idcomment }, { $set: { ...request.body } });
    response.send({ msg: "updated succ" });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not update comment", error });
  }
};

// Supprimer un commentaire
exports.DeleteComment = async (request, response) => {
  try {
    const { idcomment } = request.params;
    let result = await comment.deleteOne({ _id: idcomment });
    response.send({ msg: "deleted succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

/* * * * * * * * * * * * * * * * * * *  *     Gere  Service et category    * * * * * * * * * * * * * * * * * * *  */
exports.GetOneService = async (request, response) => {
  try {
    const { id } = request.params;
    const findService = await service.findOne({ _id: id });
    response.status(200).send({ msg: "GET service Success ", findService });
  } catch (error) {
    response.status(400).send({ msg: "can not get the service" });
    console.log(error);
  }
};

exports.GetOneCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const findCategory = await category.findOne({ _id: id });
    response.status(200).send({ msg: "GET Category Success ", findCategory });
  } catch (error) {
    response.status(400).send({ msg: "can not get the Category" });
    console.log(error);
  }
};
