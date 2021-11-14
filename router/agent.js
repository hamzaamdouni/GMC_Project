const express = require("express");
const {
  RegisterAgentValidation,
  Agentvalidation,
} = require("../middlewares/Validationagent");
const isAuth = require("../middlewares/isAuth");
const isAgent = require("../middlewares/isAgent");
const {
  RegisterAgent,
  GetAgent,
  UpdateAgent,
  GetRequestDemande,
  TraiterDemande,
  DeleteRequestDemande,
  TraiterComment,
  DeleteComment,
  GetOneCategory,
  GetOneService,
  GetComments,
} = require("../controllers/agent.controllers");

const router = express.Router();

/* * * * * * * * * * * * * * * * * * *  *     Gere  profil Agent    * * * * * * * * * * * * * * * * * * *  */
// ajouter profil Agent
router.post(
  "/register",
  isAuth,
  isAgent,
  RegisterAgentValidation(),
  Agentvalidation,
  RegisterAgent
);

// Afficher le compte authetifier du client
router.get("/profil", isAuth, GetAgent);

// uppdate le compte authetifier du client
router.put(
  "/profil",
  isAuth,
  RegisterAgentValidation(),
  Agentvalidation,
  UpdateAgent
);

/* * * * * * * * * * * * * * * * * * *  *     Gere   demande    * * * * * * * * * * * * * * * * * * *  */
// Afficher les demande
router.get("/demande", isAuth, GetRequestDemande);

// traité une demande
router.put("/demande/:iddemande", isAuth, TraiterDemande);

// Supprimer une demande
router.delete("/demande/:iddemande", isAuth, DeleteRequestDemande);

/* * * * * * * * * * * * * * * * * * *  *     Gere  commentaire    * * * * * * * * * * * * * * * * * * *  */

// Afficher les commentaires
router.get("/comment", isAuth, GetComments);

// traité un commentaire (accepte ou refuser)
router.put("/comment/:idcomment", isAuth, TraiterComment);

// Supprimer un commentaire
router.delete("/comment/:idcomment", isAuth, DeleteComment);

/* * * * * * * * * * * * * * * * * * *  *     Gere  service et category    * * * * * * * * * * * * * * * * * * *  */
router.get("/service/:id", GetOneService);
router.get("/category/:id", GetOneCategory);

module.exports = router;
