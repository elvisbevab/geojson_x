import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('User', userSchema);
