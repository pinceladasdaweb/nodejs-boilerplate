var fs = require('fs'),
    seo = JSON.parse(fs.readFileSync(__dirname + '/seo.json'));

exports.router = {
    index: function(req, res) {
        res.render('index', { seo : seo });
    },
    projects: function(req, res) {
        res.render('projects', { seo : seo });
    },
    services: function(req, res) {
        res.render('services', { seo : seo });
    },
    downloads: function(req, res) {
        res.render('downloads', { seo : seo });
    },
    about: function(req, res) {
        res.render('about', { seo : seo });
    },
    contact: function(req, res) {
        res.render('contact', { seo : seo });
    }
};
