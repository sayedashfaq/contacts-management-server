import express from "express";
import {
  getAllContacts,
  getAContact,
  createAContact,
  updateAContact,
  deleteAContact,
} from "../controllers/contacts.js";

const router = express.Router();

router.get("/api/contacts", getAllContacts);
router.get("/api/:id", getAContact);
router.post("/api/contacts", createAContact);
router.put("/api/contacts/:id", updateAContact);
router.delete("/api/contacts", deleteAContact);

export default router;
