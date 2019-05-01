const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
var rp = require('request-promise')

router.get('/', (req, res) => res.json({success: true, error: false}));

router.get('/all', (req, res) => {
  const options = {
    uri: `https://rgg.nfusioncatalog.com/service/price/all?currency=USD&withretailtiers=true&withwholesaletiers=true&withCost=true&token=${keys.apiKey}&shippingInAsk=true`,
    headers: {
      "Accept": "application/json"
    },
    json: true
  };
  rp(options)
    .then(response => {
      res.json({data: response});
      return true;
    })
    .catch(function(err) {
      console.error(err);
      res.status(404).json({error: err});
    });
});

module.exports = router;