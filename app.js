var express = require('express'),
	hbs = require('hbs'),
	moment = require('moment'),
	router = require(__dirname + '/routes').router,
	app = express(),
	port = process.env.PORT || 3002;

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('dateFormat', function(context, block) {
	if (moment) {
		var f = block.hash.format || "MMM DD, YYYY hh:mm:ss A";
			return moment(context).format(f);
		} else {
			return context;
	};
});

app.set('view engine', 'html');
app.set('views', __dirname + '/views/pages');
app.engine('html', hbs.__express);

app.use(express.static(__dirname + '/public'));

app.get('/index.html', function(req, res){
    res.redirect(301, '/');
});
app.get('/', router.index);
app.get('/projects.html', router.projects);
app.get('/services.html', router.services);
app.get('/downloads.html', router.downloads);
app.get('/about.html', router.about);
app.get('/contact.html', router.contact);

app.listen(port);
console.log('Your server goes on localhost:' + port);