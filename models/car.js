var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  carMake: {type: String },
  carModel: {type: String },
  color: {type: String },
  year: {type: Number},
  odometer: {type: Number, default: 00000},
  photo: {type: String} 
},{
  timestamps: true
});

module.exports = mongoose.model('Car', carSchema);