const user = require('../models/user')
const agent = require('../models/agent');
const demande = require('../models/demande');
const service = require('../models/service');
const category = require('../models/category');

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


/* * * * * * * * * * * * * * * * * * *  *     Gere  profil Client    * * * * * * * * * * * * * * * * * * *  */

// Afficher le compte authetifier du client
exports.getOneUser = async (request, response) => {
    try {
        const token = request.headers['authorization']
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const { _id } = decoded
        const findUser = await user.findOne({ _id });
        response.send({  findUser });
    } catch (error) {
      response.status(400).send({ msg: "can not get the User" });
    }
  };

// uppdate le compte authetifier du client
exports.updateUser = async (request,response) => {
    try {
        const token = request.headers['authorization']
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const saltRounds = 10;
        const hashedpassword = bcrypt.hashSync(request.body.password , saltRounds)
        request.body.password = hashedpassword 
        await user.updateOne({ _id: decoded._id }, { $set: { ...request.body } });
      response.send({ msg: "updated succ" });
    } catch (error) {
      response.status(400).send({ msg: "can not update" });
    }
  };

// Delete le compte authetifier du Client
exports.deleteUser = async (request,response) => {
    try {
        const token = request.headers['authorization']
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        let result = await user.deleteOne({ _id: decoded._id });
        response.send({ msg: "deleted succ" });
    } catch (error) {
      response.status(400).send({ msg: "can not delete" });
    }
  };

/* * * * * * * * * * * * * * * * * * *  *     Gere  profil agent    * * * * * * * * * * * * * * * * * * *  */

// Afficher Les Agent par service
exports.getAllAgentService = async (request,response) => {
  try {
    const { agentservice } = request.params;
    const OneService = await service.findOne({nom : agentservice})
    const { _id } = OneService
    const AgentList = await agent.find({id_service : _id})
    response.send({ msg: 'get all agent', AgentList });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents", error });
  }
};

// Afficher Les Agent par category
exports.getAllAgentCategory = async (request,response) => {
  try {
    const { agentcategory } = request.params;
    const OneCategory = await category.findOne({nom : agentcategory})
    const { _id } = OneCategory
    const AgentList = await agent.find({id_category : _id})
    response.send({ msg: 'get all agent', AgentList });
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents", error });
  }
};

// Noter un agent 

/* * * * * * * * * * * * * * * * * * *  *     Gere   demande    * * * * * * * * * * * * * * * * * * *  */

// Afficher les demande 
exports.GetRequestDemande = async (request,response) => {
  try {
    const finddemande = await demande.find({id_user : request.user._id})
    response.send({ msg : 'Get all request ' , finddemande})
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents", error });
  }
};

// Envoyer une demande de Demande
exports.SendRequestDemande = async (request,response) => {
  try {
    const { idagent } = request.params
    const findAgent = await agent.findOne({ _id : idagent})
    const newRequest = new demande({...request.body , id_user : request.user._id , id_agent : findAgent._id , id_category : findAgent.id_category})
    await newRequest.save()
    response.send({msg : 'register seccess' , demande : newRequest})
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents", error });
  }
};

// Modifier une demande si pas encore traité
exports.UpdateRequestDemande = async (request,response) => {
  try {
    const { iddemande } = request.params
    const findDemande = await demande.findOne({_id : iddemande})
    if(findDemande == 'En cour'){
      await demande.updateOne({_id : findDemande._id } , { $set : {...request.body}})
      response.send({ msg: "updated succ" });
    }
    else{
      response.status(400).send({ msg: "Demande deja realiser" });
    }
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not update demande", error });
  }
};

// Supprimer une demande si pas encore traité
exports.DeleteRequestDemande = async (request,response) => {
  try {
    const { iddemande} = request.params
    const findDemande = await demande.findOne({_id : iddemande})
    if(findDemande == 'En cour'){
    let result = await deleteOne({ _id : iddemande})
    response.send({ msg: "deleted succ" });
    }
    else{
      response.status(400).send({ msg: "Demande deja realiser" });
    }
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};

/* * * * * * * * * * * * * * * * * * *  *     Gere  commentaire    * * * * * * * * * * * * * * * * * * *  */

// Ajouter un commentaire
exports.AddComment = async (request,response) => {
  try {
    const { idagent } = request.params
    const findAgent = await agent.findOne({ _id : idagent})
    const newComment = new comment({...request.body , id_user : request.user._id , id_agent : findAgent._id })
    await newComment.save()
    response.send({msg : 'register seccess' , demande : newComment})
  } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not get Agents", error });
  }
};

// Modifier un commentaire
exports.UpdateComment = async (request,response) => {
  try {
    const { idcomment } = request.params
      await comment.updateOne({_id : idcomment } , { $set : {...request.body}})
      response.send({ msg: "updated succ" });
      } catch (error) {
    console.log(error);
    response.status(400).send({ msg: "can not update comment", error });
  }
};

// Supprimer un commentaire
exports.DeleteComment = async (request,response) => {
  try {
    const { idcomment} = request.params
    let result = await deleteOne({ _id : idcomment})
    response.send({ msg: "deleted succ" });    
  } catch (error) {
    response.status(400).send({ msg: "can not delete" });
  }
};