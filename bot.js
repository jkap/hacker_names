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


var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);


T.post('statuses/update', { status: tweet }, function(err, data, response) {
//  console.log(data)
})
