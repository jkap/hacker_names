var tracery = require('tracery-grammar');

var processedGrammar = tracery.createGrammar(require('./grammar.json'));
var disallowed = require('./disallowed');

processedGrammar.addModifiers(tracery.baseEngModifiers);

var tweet;

do {
	tweet = processedGrammar.flatten("#origin#").toUpperCase();
console.log(tweet);
} while (disallowed.indexOf(tweet) > -1)


var Twit = require('twit');
var Mastodon = require('mastodon');


var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);

var M = new Mastodon({
  access_token: process.env.MASTODON_ACCESS_TOKEN,
  api_url: 'https://gay.crime.team/api/v1/'
});


T.post('statuses/update', { status: tweet }, function(err, data, response) {
  if (err) {
    console.warn(err);
  }
})

M.post('statuses', { status: tweet }, function (err, data, response) {
  if (err) {
    console.warn(err);
  }
});
