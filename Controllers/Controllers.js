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
