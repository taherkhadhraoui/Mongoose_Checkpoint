const express = require("express");
const {
  AddContact,
  GetContact,
  DeleteContact,
  UpdateContact,
} = require("../Controllers/Controllers");

const ContactRoutes = express.Router();
const ContactSchema = require("../Models/Contact");

// method POST
ContactRoutes.post("/", AddContact);

// method GET
ContactRoutes.get("/", GetContact);

// method DELETE
// req.params

ContactRoutes.delete("/:id", DeleteContact);

// method update
// req.params
ContactRoutes.put("/:id", UpdateContact);

module.exports = ContactRoutes;
