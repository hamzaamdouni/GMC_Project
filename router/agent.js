const express = require('express')
const { RegisterAgentValidation, Agentvalidation } = require('../middlewares/Validationagent')
const isAuth = require('../middlewares/isAuth')
const isAgent = require('../middlewares/isAgent')
const { RegisterAgent, GetAgent, UpdateAgent, DeleteAgent, GetRequestDemande, TraiterDemande, DeleteRequestDemande, TraiterComment, DeleteComment, GetOneCategory, GetOneService } = require('../controllers/agent.controllers')

const router = express.Router()

/* * * * * * * * * * * * * * * * * * *  *     Gere  profil Agent    * * * * * * * * * * * * * * * * * * *  */
// ajouter profil Agent
router.post('/register', isAuth, isAgent ,RegisterAgentValidation(), Agentvalidation , RegisterAgent )

// Afficher le compte authetifier du client
router.get('/profil/:id'  , GetAgent)

// uppdate le compte authetifier du client
router.put('/profil', isAuth , isAgent ,RegisterAgentValidation(), Agentvalidation, UpdateAgent)

// Delete le compte authetifier du Client
router.delete('/profil', isAuth , isAgent , DeleteAgent)

/* * * * * * * * * * * * * * * * * * *  *     Gere   demande    * * * * * * * * * * * * * * * * * * *  */
// Afficher les demande 
router.get("/demande/", isAuth , isAgent , GetRequestDemande);

// traité une demande
router.put('/demande/:iddemande', isAuth , isAgent , TraiterDemande )

// Supprimer une demande 
router.delete("/demande/:iddemande", isAuth , isAgent ,DeleteRequestDemande);


/* * * * * * * * * * * * * * * * * * *  *     Gere  commentaire    * * * * * * * * * * * * * * * * * * *  */

// traité un commentaire (accepte ou refuser)
router.put('/comment/:idcomment', isAuth , isAgent , TraiterComment )

// Supprimer un commentaire
router.delete("/comment/:idcomment", isAuth , isAgent ,DeleteComment);


/* * * * * * * * * * * * * * * * * * *  *     Gere  service et category    * * * * * * * * * * * * * * * * * * *  */
router.get("/service/:id", GetOneService);
router.get("/category/:id", GetOneCategory);



module.exports = router