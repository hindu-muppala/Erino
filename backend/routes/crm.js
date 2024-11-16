// First Name
// Last Name
// Email
//Phone Number
// Company
// JOb Title

// get request
const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.post("/", async (req, res) => {
  // {
  //   firstName: 'Hindu',
  //   lastName: 'Muppala',
  //   email: 'hindumuppala@gmail.com',
  //   contact: '9989513832',
  //   jobTitle: 'Infosys Springboard AI/ML intern',
  //   company: 'Chaitanya Bharathi Institute of Technology'
  // }
  // {

  try {
    ////////////
    console.log(req.body);
    const { firstName, lastName, email, contact, jobTitle, company } = req.body;

    if (!firstName || !lastName || !contact || !jobTitle || !company) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const contacts = await Contact.find();
    const duplicate = contacts.some((x) => {
      x.email == email || x.contact == contact;
    });
    ////////////////
    if (duplicate) {
      return res
        .status(409)
        .json({ message: "Duplicate entry: email or contact already exists" });
    }
    //////////////
    const newContact = new Contact({
      first_name: firstName,
      last_name: lastName,
      email: email,
      job_title: jobTitle,
      company: company,
      contact: contact,
    });

    await newContact.save();

    res.status(201).json({
      message: "Contact added successfully",
      contact: res.body,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const uC = await Contact.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!uC) {
      return res.status(404).json({ message: "Contact not Found" });
    }
    console.log(req.body)
    res.status(200).json(uC);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    console.log(contact);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
