const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req, res, next) {    
  res.header("Access-Control-Allow-Origin", "*");    
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');   
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");    
  return next(); 
  }
); 
app.use(express.static(path.join(__dirname, '../client/public/dist')));

app.get('/newProfile', function (req, res){
	db.fetchUserProfile(req, (err, userProfile) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.json(userProfile[0]);
    }
	});
});

app.post('/postProfile',function(req,res){
  db.insertIntoDB( req, (err, data) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
  	  res.status(201);
      res.end();
    }
  });
});

app.post('/editProfile', function (req, res) {
  db.updateUserProfile(req, (err, data) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.status(201);
      res.end();
    }
  })
});

app.listen(3000,()=>{
  console.log('listening on port 3000');
})





