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
  avalibility: {
    type: String,
    num: ['vacant', 'rented', 'sold'],
    default: 'vacant',
  },
  createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Property', propertySchema);
