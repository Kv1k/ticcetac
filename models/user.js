var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    firstName : String,
    email : String,
    password : String,
    journey : [{type: mongoose.Schema.Types.ObjectId, ref:"journeys"}] // références à la collection "journeys"
    
  });
  
  var userModel = mongoose.model('users', userSchema);

  module.exports = userModel