const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/crm'); 

const app = express();
const port = 8080;

const cors = require('cors');


app.use(cors({ origin: 'http://localhost:3000' }));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/crm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use('/contacts', contactRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
