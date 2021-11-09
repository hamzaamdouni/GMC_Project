const agent = require("../models/agent");
const user = require("../models/user");
const category = require("../models/category");
const service = require("../models/service");
const comment = require("../models/comment");

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
    const { id } = request.params;
    const findAgent = await agent.findOne({ id_agent: id });
    response.status(200).send({ msg: "GET AGENT Saccess ", findAgent });
  } catch (error) {
    response.status(400).send({ msg: "can not get the Agent" });
    console.log(error);
  }
};
// update le compte authetifier de l'agent
exports.UpdateAgent = async (request, response) => {
  try {
    await agent.updateOne(
      { id_agent: request.user._id },
      { $set: { ...request.body } }
    );
    response.send({ msg: "updated succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not update", usser });
    console.log(error);
  }
};

// Delete le compte authetifier de l'agent
exports.DeleteAgent = async (request, response) => {
  try {
    let resultUser = await user.deleteOne({ _id: request.user._id });
    let result = await agent.deleteOne({ id_agent: request.user._id });
    response.send({ msg: "deleted succ" });
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

/* * * * * * * * * * * * * * * * * * *  *     Gere   demande    * * * * * * * * * * * * * * * * * * *  */
// Afficher les demande
exports.GetRequestDemande = async (request, response) => {
  try {
    const finddemande = await demande.find({ id_agent: request.agent._id });
    response.send({ msg: "Get all request ", finddemande });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents", error });
  }
};

// traité une demande (accepte ou refuser)
exports.TraiterDemande = async (request, response) => {
  try {
    const { iddemande } = request.params;
    await demande.updateOne(
      { _id: iddemande },
      { $set: { ...request.body.etat } }
    );
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
    const findDemande = await demande.findOne({ _id: iddemande });
    if (findDemande == "En cour") {
      let result = await deleteOne({ _id: iddemande });
      response.send({ msg: "deleted succ" });
    } else {
      response.status(400).send({ msg: "Demande deja realiser" });
    }
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

/* * * * * * * * * * * * * * * * * * *  *     Gere  commentaire    * * * * * * * * * * * * * * * * * * *  */

// traité un commentaire (accepte ou refuser)
exports.TraiterComment = async (request, response) => {
  try {
    const { idcomment } = request.params;
    await comment.updateOne(
      { _id: idcomment },
      { $set: { ...request.body.etat } }
    );
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
