const user = require("../models/user");
const agent = require("../models/agent");
const demande = require("../models/demande");
const service = require("../models/service");
const category = require("../models/category");
const comment = require("../models/comment");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

/* * * * * * * * * * * * * * * * * * *  *     Gere  profil Client    * * * * * * * * * * * * * * * * * * *  */

// Afficher le compte authetifier du client
exports.getOneUser = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = decoded;
    const findUser = await user.findOne({ _id });
    response.send({ findUser });
  } catch (error) {
    response.status(400).send({ msg: "can not get the User" });
  }
};

// uppdate le compte authetifier du client
exports.updateUser = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    await user.updateOne({ _id: decoded._id }, { $set: { ...request.body } });
    response.send({ msg: "updated succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not update" });
  }
};

// Delete le compte authetifier du Client
exports.deleteUser = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    let resultuser = await user.deleteOne({ _id: decoded._id });
    let resultcomment = await comment.deleteMany({ id_user: decoded._id });
    let resultdemande = await demande.deleteMany({ id_user: decoded._id });
    const findAgent = await agent.findOne({ id_agent: decoded._id });
    if (findAgent) {
      let resultcomment = await comment.deleteMany({ id_agent: findAgent._id });
      let resultdemande = await demande.deleteMany({ id_agent: findAgent._id });
    }

    response.send({ msg: "deleted succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

/* * * * * * * * * * * * * * * * * * *  *     Gere  profil agent    * * * * * * * * * * * * * * * * * * *  */
// Afficher Tout Les Agent
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

// Afficher Les Agent par service
exports.getAllAgentService = async (request, response) => {
  try {
    const { agentservice } = request.params;
    const OneService = await service.findOne({ nom: agentservice });
    const { _id } = OneService;
    const AgentList = await agent
      .find({ id_service: _id })
      .populate("id_agent")
      .populate("id_service")
      .populate("id_category");
    response.send({ msg: "get all agent by service", AgentList });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents by service", error });
  }
};

// Afficher Les Agent par category
exports.getAllAgentCategory = async (request, response) => {
  try {
    const { agentcategory } = request.params;
    const OneCategory = await category.findOne({ nom: agentcategory });
    const { _id } = OneCategory;
    const AgentList = await agent
      .find({ id_category: _id })
      .populate("id_agent")
      .populate("id_service")
      .populate("id_category");
    response.send({ msg: "get all agent by category", AgentList });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents by category", error });
  }
};

// Afficher Un Agent
exports.getOneAgent = async (request, response) => {
  try {
    const { idagent } = request.params;
    const OneAgent = await agent
      .findOne({ _id: idagent })
      .populate("id_agent")
      .populate("id_service")
      .populate("id_category");
    console.log(OneAgent);
    response.send({ msg: "get one agent", OneAgent });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agent", error });
  }
};
// Noter un agent

/* * * * * * * * * * * * * * * * * * *  *     Gere   demande    * * * * * * * * * * * * * * * * * * *  */

// Afficher les demande
exports.GetRequestDemande = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = decoded;
    const finddemande = await demande
      .find({ id_user: _id })
      .populate("id_agent")
      .populate("id_category")
      .populate("id_service");
    response.send({ msg: "Get all request ", finddemande });
  } catch (error) {
    response.status(400).send({ msg: "can not send ", error });
  }
};

// Envoyer une demande de Demande
exports.SendRequestDemande = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = decoded;
    const newRequest = new demande({
      ...request.body,
      id_user: _id,
    });
    await newRequest.save();
    response.send({ msg: "register demande seccess", demande: newRequest });
  } catch (error) {
    response.status(400).send({ msg: "can not register demande", error });
  }
};

// Modifier une demande si pas encore traité
exports.UpdateRequestDemande = async (request, response) => {
  try {
    const { iddemande } = request.params;

    await demande.updateOne({ _id: iddemande }, { $set: { ...request.body } });
    response.send({ msg: "updated succ" });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not update demande", error });
  }
};

// Supprimer une demande si pas encore traité
exports.DeleteRequestDemande = async (request, response) => {
  try {
    const { iddemande } = request.params;
    let result = await demande.deleteOne({ _id: iddemande });
    response.send({ msg: "deleted succ" });
  } catch (error) {
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
    const findcomment = await comment.find({ id_user: _id });
    response.send({ msg: "Get all comments ", findcomment });
  } catch (error) {
    response.status(400).send({ msg: "can not send ", error });
  }
};
// Ajouter un commentaire
exports.AddComment = async (request, response) => {
  try {
    const token = request.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = decoded;
    const newComment = new comment({
      ...request.body,
      id_user: _id,
    });
    console.log(newComment);
    await newComment.save();
    response.send({ msg: "register seccess", demande: newComment });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not register", error });
  }
};

// Modifier un commentaire
exports.UpdateComment = async (request, response) => {
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
    let result = await deleteOne({ _id: idcomment });
    response.send({ msg: "deleted succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

// afficher les commentaire verifier
exports.GetCommentVerified = async (request, response) => {
  try {
    const { idagent } = request.params;
    const GetComment = await comment
      .find({ id_agent: idagent, etat: "Verified" })
      .populate("id_user");
    response.send({ msg: "get all verified comment", GetComment });
  } catch (error) {
    response.status(400).send({ msg: "can not get verified comment", error });
  }
};
