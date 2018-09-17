var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/thesis-profile');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connection successful');
});

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, required: true},
  street: String,
  city: String,
  state: String,
  zipCode: Number,
});


var User = mongoose.model('User', UserSchema);


var insertIntoDB = function(userInfo, callback) {
  var user = new User({ 
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    street: userInfo.street,
    city: userInfo.city,
    state: userInfo.state,
    zipCode: userInfo.zipCode,
  });
  user.save(function(err, data) {
    if ( err ) {
      console.log('error inserting user text...', err.message);
    } else {
      callback();
    }
  })
};

module.exports.insertIntoDB = insertIntoDB;