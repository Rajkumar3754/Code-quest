const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModels');

//@ desc get contact
// @route get /api/contact
//@access public



const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@ desc post contact
// @route post /api/contact
//@access public



const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({ error: "All fields are mandatory" });
    return;
  }



  const contacted = await Contact.create({ name, email, phone });
  res.status(201).json(contacted);
});

//@ desc get specific contact
// @route get specific /api/contact
//@access public


const getallContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact){
    res.status(404).json({ error: "Contact not found" });
    return;
  }
  res.status(200).json(contact);
});


//@ desc put contact
// @route put /api/contact
//@access public


const putContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!contact){
    res.status(404).json({ error: "Contact not found" });
    return;
  }
  res.status(200).json(contact);
});

//@ desc delete contact
// @route delete /api/contact
//@access public


const deleteContact = asyncHandler(async (req, res) => {

  
  // Perform delete operation
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Deleted contact with id ${req.params.id}` });
});

module.exports = {
  getContact,
  postContact,
  getallContact,
  putContact,
  deleteContact,
};
