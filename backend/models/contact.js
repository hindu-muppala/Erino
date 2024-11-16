const mongoose = require("mongoose");

// First Name
// Last Name
// Email
//Phone Number
// Company
// JOb Title
const contactSchema = new mongoose.Schema({
  first_name: { type: String, Required: true },
  last_name: { type: String, Required: true },
  email: {
    type: String,
    Required: true,
    unique: true,

    validate: {
      validator: function (mail) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
      },
      message: (x) => `${x.value} is not valid mail`,
    },
  },
  company: { type: String, Required: true },
  job_title: { type: String, Required: true },
  contact: {
    type: String,
    Required: true,
    unique: true,
    validate: {
      validator: function (number) {
        return number.length == 10;
      },
      message: "Contact must be length of ten (Indian Contact)",
    },
  },
});
module.exports = mongoose.model("Contact", contactSchema);
