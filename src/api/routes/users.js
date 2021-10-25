var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");

router.post('/register', function(req, res, next) {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
      res.status(400).json({
          error: true,
          message: "Email and password required"
      });
      return
  }

  const secretKey = "secret key"
  const expires_in = 60 * 60 * 24
  const exp = Date.now() + expires_in * 1000
  const token = jwt.sign({email, password, exp}, secretKey)

  res.status(201).json({message: "Logged in as " + email, token_type: "Bearer", token, expires_in});

});

module.exports = router;
