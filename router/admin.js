const express = require("express");

const {
  RegisterAdminValidation,
  LoginAdminValidation,
  Adminvalidation,
} = require("../middlewares/Validationadmin");
const {
  RegisterAdmin,
  LoginAdmin,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
  addService,
  updateService,
  deleteService,
  getAllService,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getReclamation,
  updateReclamation,
  deleteReclamation,
  VerifyUser,
  deleteUserByAdmin,
  getAllUserRole,
  getAllAgentService,
  getAllAgentCategory,
} = require("../controllers/admin.controllers");
const isAuthAdmin = require("../middlewares/isAuthAdmin");

const router = express.Router();

/* * * * * * * * * * * * * * * * * * *  *     Register & Login     * * * * * * * * * * * * * * * * * * *  */

// Register Admin
router.post(
  "/register",
  isAuthAdmin,
  RegisterAdminValidation(),
  Adminvalidation,
  RegisterAdmin
);

// Login Admin
router.post("/login", LoginAdminValidation(), Adminvalidation, LoginAdmin);

/* * * * * * * * * * * * * * * * * * *  *     Gere son profil     * * * * * * * * * * * * * * * * * * *  */

// Afficher le compte authetifier de l'admin
router.get("/profil", isAuthAdmin, getOneAdmin);

// uppdate le compte authetifier de l'admin
router.put("/profil", isAuthAdmin, updateAdmin);

// Delete le compte authetifier de l'admin
router.delete("/profil", isAuthAdmin, deleteAdmin);

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Users     * * * * * * * * * * * * * * * * * * * * *  */

// Verified a user (admin)
router.put("/verify/:id", isAuthAdmin, VerifyUser);

// get All user by role(admin)
router.get("/role/:userrole", isAuthAdmin, getAllUserRole);

// get All Agent user by service (admin)
router.get("/agent/service/:agentservice", isAuthAdmin, getAllAgentService);

// get All Agent user by category (admin)
router.get("/agent/category/:agentcategory", isAuthAdmin, getAllAgentCategory);

// delete a user (admin)
router.delete("/delete/:id", isAuthAdmin, deleteUserByAdmin);

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Categorie    * * * * * * * * * * * * * * * * * * * * *  */

// Add a category (admin)
router.post("/category/:id", isAuthAdmin, addCategory);

// updet a category (admin)
router.put("/category/:id", isAuthAdmin, updateCategory);

//delete a category (admin)
router.delete("/category/:id", isAuthAdmin, deleteCategory);

// get Categorys for one service (admin)
router.get("/category/:id", isAuthAdmin, getCategory);

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Service    * * * * * * * * * * * * * * * * * * * * *  */

// Add a service (admin)
router.post("/service", isAuthAdmin, addService);

// updet a service (admin)
router.put("/service/:id", isAuthAdmin, updateService);

//delete a service (admin)
router.delete("/service/:id", isAuthAdmin, deleteService);

// get All Service (admin)
router.get("/allservice", isAuthAdmin, getAllService);

/* * * * * * * * * * * * * * * * * * *  * * *     Gere Reclamation     * * * * * * * * * * * * * * * * * * * * *  */
// Afficher les reclamation par etat (admin)
router.get("/reclamation/:etat", isAuthAdmin, getReclamation);

// traiter une reclamation (admin)
router.put("/reclamation/:id", isAuthAdmin, updateReclamation);

//delete a reclamation (admin)
router.delete("/reclamation/:id", isAuthAdmin, deleteReclamation);

module.exports = router;
