const ContactSchema = require("../Models/Contact");

exports.AddContact = async (req, res) => {
  try {
    const Contact = new ContactSchema(req.body);
    const found = await ContactSchema.findOne({ email: req.body.email });
    if (found) {
      return res.status(400).send("email already exists");
    }
    Contact.save();
    res.status(200).send({ msg: "contact is added", Contact });
  } catch (error) {
    res.status(500).send("This contact is not added");
  }
};

exports.GetContact = async (req, res) => {
  try {
    const contacts = await ContactSchema.find();
    res.status(200).send({ msg: "Your contacts list", contacts });
  } catch (error) {
    res.status(500).send("Could not get the contacts list");
  }
};

exports.DeleteContact = async (req, res) => {
  try {
    const contact = await ContactSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "Contact is deleted", contact });
  } catch (error) {
    res.status(500).send("Could not delete the contact");
  }
};

exports.UpdateContact = async (req, res) => {
  try {
    const contact = await ContactSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({ msg: "This contact is updated", contact });
  } catch (error) {
    res.status(500).send("This contact is not updated");
  }
};
