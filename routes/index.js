/**
 * Dependencies.
 */
var http             = require('http');
var fs               = require('fs');

module.exports = function(app, config, passport) {

    // INIT ================================
    app.get(config.public.url.admin, function(req, res) {
    	console.log(req.session);
    	if(req.session.salesId) {
    		res.render('index');
    	} else {
    		res.render('login');
    	}
    });
};