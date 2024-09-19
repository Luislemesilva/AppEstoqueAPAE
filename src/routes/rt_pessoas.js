const express = require("express");
const router = express.Router();
const PessoasController = require("../controllers/PessoasController");
const authMiddleware = require("../middlewares/authMiddleware"); // Auth middleware

// Create a new person
router.post("/create", authMiddleware(), PessoasController.create);

// Get all people
router.get("/", authMiddleware(), PessoasController.findAll);

// Get a person by ID
router.get("/:id", authMiddleware(), PessoasController.findById);

// Update a person by ID
router.put("/:id", authMiddleware(), PessoasController.update);

// Delete a person by ID
router.delete("/:id", authMiddleware("administrador"), PessoasController.delete);

module.exports = router;