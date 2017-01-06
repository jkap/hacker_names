var OAuth2 = require('oauth').OAuth2;

var oauth = new OAuth2('5f44e42712337a9df636b0aaa0293b48a26c686ca37f8053d9b3f4a31890ba3c', '49d6232f530ce235d78058cf93a5b2fa9edd3be28485d2f5d3203060d2d0d729', 'https://gay.crime.team', null, '/oauth/token');
var url = oauth.getAuthorizeUrl({ redirect_uri: 'urn:ietf:wg:oauth:2.0:oob', response_type: 'code', scope: 'read write follow' });
console.log(url)

oauth.getOAuthAccessToken('6dc91e00a86e8ab19f80651319747313158c7e90d1e85ac82b9cb740339cbc62');
