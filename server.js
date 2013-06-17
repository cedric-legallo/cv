var https = require('https'), express = require('express');

var port = process.env.PORT || 8124;

var app = express(
    express.bodyParser()
  , express.directory(__dirname + 'public')
  , express.static(__dirname + "/public")
  , express.cookieParser()
);

//app.use(express.directory('public'))
app.use(express.static('public'))

app.configure( function () {
  app.set('views', __dirname + '/views');
  app.set('view options', {layout: false});
  app.set('view engine', 'ejs');
});

app.get('/', function (req, res) {
	var options = {
		host:'spreadsheets.google.com'
		, path: '/feeds/list/0AiEH0wUq8MkHdEl4d2lnRnFzNkEyS05tb2p1b0FhTWc/od6/public/values?alt=json'
    };

    var req = https.get(options, function(resp){
		var wholeResp='';
		resp.on('data', function (chunk) {
			wholeResp+=chunk;
		});
		resp.on('end', function(){
			wholeResp=JSON.parse(wholeResp);
			compList=wholeResp.feed.entry;
			res.render('index.ejs');
		});
    });
    req.on('error', function(e){
		console.log('error : ' + e.message);
    });
    req.end();
});

app.get('/convertList', function (req, res) {
    res.render('cl2html.ejs');
});

app.get('/HEART', function (req, res) {
    res.render('heart.ejs');
});

app.get('/GAIA', function (req, res) {
    res.render('famille.ejs');
});

app.listen(port, function() {
  console.log("Listening on " + port);
});