import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  area: { type: Number, required: true },
  image: { type: String, required: true },
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Property', propertySchema);
