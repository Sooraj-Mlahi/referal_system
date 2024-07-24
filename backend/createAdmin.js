const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin'); 

const createAdmin = async () => {
  await mongoose.connect('mongodb://localhost:27017/referral_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const username = 'Admin'; 
  const email = 'admin@example.com'; 
  const password = 'Admin123'; 

  const newAdmin = new Admin({ username, email, password });
  console.log(newAdmin.username, newAdmin.email, newAdmin.password);
  await newAdmin.save();

  console.log('Admin created successfully');
  mongoose.disconnect();
};

createAdmin().catch(err => {
  console.error(err);
  mongoose.disconnect();
});
