const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys_dev');
const passport = require('passport');
const User = require('../../models/User');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//Test Route
router.get('/', (req, res) => res.json({error: false, userRoute: "running"}))

// @route POST api/users/register
// @desc Register User
// @access Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check for proper form validation
  if (!isValid) {
    res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        errors.email = 'Email already exists'
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        })
      }
    });
});


// @route POST api/users/login
// @desc Login User
// @access Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password, role } = req.body;


  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, name: user.name, avatar: user.avatar, role: user.role}
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                })
              });
          } else {
            errors.password = "Password is incorrect"
            return res.status(400).json(errors)
          }
        })
    });
});

// @route GET api/users/current
// @desc Return Current User
// @access Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  const curr_user = {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  }

  res.json(curr_user);
});

module.exports = router;
