const mongoose = require('mongoose')

// First Name
// Last Name
// Email
//Phone Number
// Company
// JOb Title
const contactSchema =

new mongoose.Schema({


        first_name :{type : String, Required : true},
        last_name : { type: String, Required : true},
        email :{ type : String, Required: true, unique : true},
        company: { type: String, Required: true},
        job_title : { type : String, Required : true},
        contact :{ type: String, Required: true, unique : true}

    }
)
module.exports = mongoose.model('Contact', contactSchema);