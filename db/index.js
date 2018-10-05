var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/thesis-profile');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connection successful');
});

var UserSchema = new mongoose.Schema({
  userId: {type: Number, unique: true},
  firstName: String,
  lastName: String,
  email: {type: String},
  street: String,
  city: String,
  userState: String,
  zipCode: Number,
  karma: Number
});


var User = mongoose.model('User', UserSchema);


var insertIntoDB = function(userInfo, callback) {
  // console.log('QUERY:', userInfo.query);
  var user = new User({ 
    userId: userInfo.body.userId,
    firstName: userInfo.body.firstName,
    lastName: userInfo.body.lastName,
    email: userInfo.body.email,
    street: userInfo.body.street,
    city: userInfo.body.city,
    userState: userInfo.body.userState,
    zipCode: userInfo.body.zipCode,
    karma: userInfo.body.karma
  });
  user.save(function(err, data) {
    if ( err ) {
      console.log('error inserting user text...', err.message);
    } else {
      callback(err, data);
    }
  })
};

var fetchUserProfile = function (userId, callback) {
  User.find({'userId' : userId}, function (err, data) {
    if (err) {
      console.log('error finding record...', err.message)
    } else {
      callback(err, data);
    }
  });
}

var updateUserProfile = function (userInfo, callback) {
  let id = {userId: parseInt(userInfo.body.userId)};
  let newInfo = {
    firstName: userInfo.body.firstName,
    lastName: userInfo.body.lastName,
    email: userInfo.body.email,
    street: userInfo.body.street,
    city: userInfo.body.city,
    userState: userInfo.body.userState,
    zipCode: userInfo.body.zipCode,
    karma: userInfo.body.karma
  };
  User.findOneAndUpdate(id, newInfo, {upsert: true}, function (err, data) {
      if (err) {
        console.log('error updating record...', err.message);
      } else {
        callback(err, data);
      }
  });
  // User.find({'userId': id}, (data) => {
  //   var user = new User({ 
  //     userId: data.userId,
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     email: data.email,
  //     street: data.street,
  //     city: data.city,
  //     userState: data.userState,
  //     zipCode: data.zipCode,
  //     karma: data.karma
  //   });
  //   user.save(function (err, data) {
  //     if (err) {
  //       console.log('error inserting user text...', err.message);
  //     } else {
  //       callback(err, data);
  //     }
  //   });
  // });
}

module.exports.insertIntoDB = insertIntoDB;
module.exports.fetchUserProfile = fetchUserProfile;
module.exports.updateUserProfile = updateUserProfile;





