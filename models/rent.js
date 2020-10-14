const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});
     
const  rentSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  car_id: {type: Schema.Types.ObjectId, ref: 'Car'},
  rent_id: {type: String},
  reviews: [reviewSchema],
  price: {type: Number},
  
});

module.exports = mongoose.model('Rent', rentSchema);