var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  carMake: {type: String },
  carModel: {type: String },
  photo: {type: String},
  year: {type: Number},
  odometer: {type: Number, default: 00000},
  transmission: {type: String},
  city: {Number},
  fuel: {Number},
  door: {type: Number},
  drive: {type: String},
  body: {type: String},
  color: {type: String },
  daily: {type: Number},
  price: {type: Number},

},{
  timestamps: true
});

module.exports = mongoose.model('Car', carSchema);