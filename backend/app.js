require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://soorajmalhi18tl48:lePbblr01wlicUGj@cluster0.nhw1dm0.mongodb.net/referral_system?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
