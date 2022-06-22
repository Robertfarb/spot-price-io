const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const livePrices = require('./routes/api/live-prices');
const cors = require('cors');
const port = process.env.PORT || 8000;
const path = require('path');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys_dev').mongoURI;

mongoose.connect(db,  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource:"admin",
  ssl: true,
})
  .then(console.log("mongoDB connected", db.collection))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/live-prices', livePrices)

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, console.log(`Server is running on port ${port}`));
