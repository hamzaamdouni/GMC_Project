const express = require("express");
const {
  getOneUser,
  updateUser,
  deleteUser,
  getAllAgentService,
  getAllAgentCategory,
  GetRequestDemande,
  SendRequestDemande,
  UpdateRequestDemande,
  DeleteRequestDemande,
  AddComment,
  UpdateComment,
  DeleteComment,
  getAllAgent,
  getOneAgent,
  GetCommentVerified,
  GetComments,
} = require("../controllers/user.controllers");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();

/* * * * * * * * * * * * * * * * * * *  *     Gere  profil User    * * * * * * * * * * * * * * * * * * *  */

// Afficher le compte authetifier du client
router.get("/profil", isAuth, getOneUser);

// uppdate le compte authetifier du client
router.put("/profil", isAuth, updateUser);

// Delete le compte authetifier du Client
router.delete("/profil", isAuth, deleteUser);

/* * * * * * * * * * * * * * * * * * *  *     Gere  profil agent    * * * * * * * * * * * * * * * * * * *  */

// Afficher Les Agent par service
router.get("/allagents", isAuth, getAllAgent);

// Afficher Les Agent par service
router.get("/agents/service/:agentservice", isAuth, getAllAgentService);

// Afficher Les Agent par category
router.get("/agents/category/:agentcategory", isAuth, getAllAgentCategory);

// Afficher Un Agent
router.get("/agent/:idagent", isAuth, getOneAgent);

/* * * * * * * * * * * * * * * * * * *  *     Gere   demande    * * * * * * * * * * * * * * * * * * *  */

// Afficher les demande
router.get("/demande", isAuth, GetRequestDemande);

// Envoyer une demande de Demande
router.post("/demande", isAuth, SendRequestDemande);

// Modifier une demande si pas encore traité
router.put("/demande/:iddemande", isAuth, UpdateRequestDemande);

// Supprimer une demande si pas encore traité
router.delete("/demande/:iddemande", isAuth, DeleteRequestDemande);

/* * * * * * * * * * * * * * * * * * *  *     Gere  commentaire    * * * * * * * * * * * * * * * * * * *  */

// Afficher les commentaires
router.get("/comment", isAuth, GetComments);

// Ajouter un commentaire
router.post("/comment", isAuth, AddComment);

// Modifier un commentaire
router.put("/comment/:idcomment", isAuth, UpdateComment);

// Supprimer un commentaire
router.delete("/comment/:idcomment", isAuth, DeleteComment);

// afficher les commentaire verifier
router.get("/comment/:idagent", isAuth, GetCommentVerified);

module.exports = router;
