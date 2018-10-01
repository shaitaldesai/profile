const express = require('express');
const bodyParser = require('body-parser');
// var cors = require('cors');
const path = require('path');
const db = require('../db/index.js');

const app = express();
// app.use(cors);
// app.options('*', cors());
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../client/public/dist')));

app.get('/profile', function (req, res) {
  res.set(defaultCorsHeaders);
  res.sendFile(path.join(__dirname, '../client/public/dist/index.html'));
});

app.get('/editprofile', function (req, res) {
  res.set(defaultCorsHeaders);
  res.sendFile(path.join(__dirname, '../client/public/dist/index.html'));
});

app.get('/newProfile', function (req, res){
  res.set(defaultCorsHeaders);
  res.status(200);
	db.fetchUserProfile(req, (err, userProfile) => {
    console.log(userProfile);
    if (err) {
      console.log(err);
    } else {
      res.status(200);
      res.json(userProfile[0]);
    }
	});
});

app.post('/profile',function(req,res){
  db.insertIntoDB( req.body, () => {
    res.set(defaultCorsHeaders);
  	res.status(201);
    res.end();
  });
});
app.listen(3000,()=>{
  console.log('listening on port 3000');
})