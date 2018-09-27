const express = require('express');
const bodyParser = require('body-parser');
// var cors = require('cors');
const path = require('path');
const db = require('../db/index.js');

const app = express();
// app.use(cors);
// app.options('*', cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../client/public/dist')));

app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/dist/index.html'));
});

app.get('/editprofile', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/dist/index.html'));
});

app.get('/newProfile', function (req, res){
	// console.log(req.id);
  res.status(200);
  // res.send({
  //   firstName: 'John',
  //   lastName: 'Smith',
  //   email: 'john.smith@smith.com',
  //   street: 'Johnsmith dr.',
  //   city: 'Smithcity',
  //   user_state: 'Bigstate',
  //   zipCode: '00000'
  // });
	db.fetchUserProfile(req, (err, userProfile) => {
    console.log(userProfile);
    if (err) {
      console.log(err);
    } else {
      res.status(200);
      res.send(userProfile[0]);
    }
	});
});

app.post('/profile',function(req,res){
  console.log(req.body);
  db.insertIntoDB( req.body, () => {
  	res.status(201);
    res.end();
  });
});
app.listen(3000,()=>{
  console.log('listening on port 3000');
})