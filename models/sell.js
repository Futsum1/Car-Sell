const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   comment: String,
//   rating: {type: Number, min: 1, max: 5, default: 5}
// }, {
//   timestamps: true
// });
     
const  sellSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  car_id: {type: Schema.Types.ObjectId, ref: 'Car'},
  sell_id: {type: String},
  reviews: [reviewSchema],
  
});

module.exports = mongoose.model('Rent', sellSchema);