const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const cors = require('cors');
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(console.log("mongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello, this is the root of SpotPrice.io Application');
});

app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);

app.listen(port, console.log(`Server is running on port ${port}`));
