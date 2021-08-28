// server/index.js

const express = require("express");
var Twitter = require('twitter');
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.get("/api", (req, res) => {

  client.post('statuses/update', {status: 'this is a '}, function(error, tweet, response) {
    console.log("hello1");
    if (!error) {
      console.log(tweet);
    }
    else {
      console.log(error);
    }
  });
  console.log("hello2");
  res.json({ message: "it should be posted :)" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});