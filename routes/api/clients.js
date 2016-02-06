var fs         = require('fs');
var multiparty = require('multiparty');

module.exports = function(app, config, db) {

    // LOGIN
    app.get('/login', function(req, res) {
        if(req.session.salesId) {
            res.render('index');
        } else {
            res.render('login');
        }
    });

    app.get('/loginForce', function(req, res) {
        res.render('login');
    });

    app.post('/login', function(req, res) {
        req.session.salesId = req.body.name;
        res.render('index');
    });

    app.get('/data', function(req, res) {
        db.Client.find(function (err, clients) {
            if (err) throw err;
            else {
                res.render('data', {clients: clients});
            }
        });
    });

    app.get('/data/:id', function(req, res) {
        var id = req.params.id;
        db.Client.findOne({_id:id}, function (err, client) {
            if (err) throw err;
            else {
                res.render('resume', {client: client});
            }
        });
    });

    var _client;

    app.get('/form', function(req, res) {
        console.log('Form posts');
        console.log(req.body);
        console.log('client for req', _client);
        if(_client) {
            db.Client.findOne({_id: _client._id}, function (err, client) {
                if (err) throw err;
                else {
                    res.render('resume', {client: client, success: true});
                }
            });
        } else {
            res.render('index');
        }
    });

    app.post('/form', function(req, res) {

        var newClient = new db.Client();

        var form = new multiparty.Form();
        form.parse(req, function(err, fields, files) {

            //here you can read the appropriate fields/files

            if(fields.company) newClient.company = fields.company[0];
            if(fields.name) newClient.name = fields.name[0];
            if(fields.priority) newClient.priority = fields.priority[0];
            if(fields.company_size) newClient.company_size = fields.company_size[0];
            if(fields.status) newClient.status = fields.status[0];
            if(fields.notes) newClient.notes = fields.notes[0];

            if(req.session.salesId) newClient.lead_owner = req.session.salesId;

            if(files && files.first || files.second) {
                if (files.first[0].size > 0) {
                    newClient.firstImage = './uploads/' + fields.company[0] + '_' + fields.name[0] + '1.jpg';
                    fs.readFile(files.first[0].path, function (err, data) {
                    //here get the image name and other data parameters which you are sending like image name etc.
                        fs.writeFile('./uploads/' + fields.company[0] + '_' + fields.name[0] + '1.jpg', data, function (err) {
                        });
                        //dont forgot the delete the temp files.
                    });
                }

                if (files.second[0].size > 0) {
                    newClient.secondImage = './uploads/' + fields.company[0] + '_' + fields.name[0] + '2.jpg';
                    fs.readFile(files.second[0].path, function (err, data) {
                    //here get the image name and other data parameters which you are sending like image name etc.
                        fs.writeFile('./uploads/' + fields.company[0] + '_' + fields.name[0] + '2.jpg', data, function (err) {
                        });
                        //dont forgot the delete the temp files.
                    });
                }
            }


            newClient.save(function (err, client) {
                if (err) {
                    res.render('index');
                }
                else {
                    _client = client;
                    res.render('resume', {client: client, success: true});
                }
            });
        });
    });
};