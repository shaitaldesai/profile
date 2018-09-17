const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const insertIntoDB = require('../db/index.js').insertIntoDB;

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../client/public/dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/dist/index.html'));
});

app.post('/profile',function(req,res){
  console.log(req.body);
  insertIntoDB( req.body, () => {
  	res.status(201);
    res.end();
  });
  // res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(3000,()=>{
  console.log('listening on port 3000');
})