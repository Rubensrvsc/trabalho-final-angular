const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');

//CREATE EXPRESS APP
const app = express();
app.use(cors());
app.use(bodyParser.json());
 
// DECLARE JWT-secret
const JWT_Secret = '3215';

var testUser = { email: 'rubens@gmail.com', password: '1234'};

app.post('/api/authenticate', (req, res) => {
 
    if (req.body) {
      var user = req.body;
      console.log(user)
   
      if (testUser.email===req.body.email && testUser.password === req.body.password) {
        var token = jwt.sign(user, JWT_Secret);
        res.status(200).send({
          signed_user: user,
          token: token
        });
      } else {
        res.status(403).send({
          errorMessage: 'Requer autorização'
        });
      }
    } else {
      res.status(403).send({
        errorMessage: 'Please provide email and password'
      });
    }
   
  });

  app.listen(5000, () => console.log('Server started on port 5000'));