const express = require("express");
const { AddContact } = require("../Controllers/Controllers");

const ContactRoutes = express.Router();
const ContactSchema = require("../Models/Contact");

// method POST
ContactRoutes.post("/", AddContact);

// method GET
ContactRoutes.get("/", async (req, res) => {
  try {
    const contacts = await ContactSchema.find();
    res.status(200).send({ msg: "Your contacts list", contacts });
  } catch (error) {
    res.status(500).send("Could not get the contacts list");
  }
});

// method DELETE
// req.params

ContactRoutes.delete("/:id", async (req, res) => {
  try {
    const contact = await ContactSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "Contact is deleted", contact });
  } catch (error) {
    res.status(500).send("Could not delete the contact");
  }
});

// method update
// req.params
ContactRoutes.put("/:id", async (req, res) => {
  try {
    const contact = await ContactSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({ msg: "This contact is updated", contact });
  } catch (error) {
    res.status(500).send("This contact is not updated");
  }
});

module.exports = ContactRoutes;
