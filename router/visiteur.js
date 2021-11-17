const express = require("express");

const {
  RegisterUser,
  AddReclamation,
  LoginUser,
  getAllService,
  getCategory,
} = require("../controllers/visiteur.controllers");

const isVerifiedUser = require("../middlewares/isVerifiedUser");
const upload = require("../middlewares/upload");
const {
  RegisterReclamationValidation,
  Reclamationvalidation,
} = require("../middlewares/Validationreclamation");
const {
  RegisterUserValidation,
  Uservalidation,
  LoginUserValidation,
} = require("../middlewares/Validationuser");

const router = express.Router();

/* * * * * * * * * * * * * * * * * * *  *     Register     * * * * * * * * * * * * * * * * * * *  */

// Register user
router.post(
  "/register",

  upload,
  RegisterUser
);
// Login user
router.post("/login", LoginUserValidation(), Uservalidation, LoginUser);

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Reclamation     * * * * * * * * * * * * * * * * * * * * *  */

// envoyer une reclamation
router.post(
  "/addreclamation",
  RegisterReclamationValidation(),
  Reclamationvalidation,
  AddReclamation
);

module.exports = router;

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Service & Category     * * * * * * * * * * * * * * * * * * * * *  */

router.get("/services", getAllService);

// get Categorys for one service
router.get("/category/:oneservice", getCategory);
