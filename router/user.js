const express = require('express');
const { getOneUser, updateUser, deleteUser, getAllAgentService, getAllAgentCategory, GetRequestDemande, SendRequestDemande, UpdateRequestDemande, DeleteRequestDemande, AddComment, UpdateComment, DeleteComment } = require('../controllers/user.controllers');
const isAuth = require('../middlewares/isAuth')


const router = express.Router()


/* * * * * * * * * * * * * * * * * * *  *     Gere  profil User    * * * * * * * * * * * * * * * * * * *  */

// Afficher le compte authetifier du client
router.get("/profil", isAuth ,getOneUser);

// uppdate le compte authetifier du client
router.put("/profil", isAuth , updateUser);

// Delete le compte authetifier du Client
router.delete("/profil", isAuth ,deleteUser);


/* * * * * * * * * * * * * * * * * * *  *     Gere  profil agent    * * * * * * * * * * * * * * * * * * *  */

// Afficher Les Agent par service
router.get('/agent/service/:agentservice' , isAuth , getAllAgentService)

// Afficher Les Agent par category
router.get('/agent/category/:agentcategory' , isAuth , getAllAgentCategory)

// Noter un agent 

/* * * * * * * * * * * * * * * * * * *  *     Gere   demande    * * * * * * * * * * * * * * * * * * *  */

// Afficher les demande 
router.get("/demande/", isAuth ,GetRequestDemande);

// Envoyer une demande de Demande
router.post("/demande/:idagent", isAuth ,SendRequestDemande);

// Modifier une demande si pas encore traité
router.put("/demande/:iddemande", isAuth ,UpdateRequestDemande);

// Supprimer une demande si pas encore traité
router.delete("/demande/:iddemande", isAuth ,DeleteRequestDemande);

/* * * * * * * * * * * * * * * * * * *  *     Gere  commentaire    * * * * * * * * * * * * * * * * * * *  */

// Ajouter un commentaire
router.post("/comment/:idagent", isAuth ,AddComment);

// Modifier un commentaire
router.put("/comment/:idcomment", isAuth ,UpdateComment);

// Supprimer un commentaire
router.delete("/comment/:idcomment", isAuth ,DeleteComment);


module.exports = router