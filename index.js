var nconf = require('nconf');
var express = require('express');
var server = express();
var app = require('./app.js');

nconf.argv()
    .env()
    .file({ file: 'config.json' })
    .defaults({
        'PORT': 8085
    });


server.use(app);

server.listen(nconf.get('PORT'), () => {
    console.info('App listening on http://localhost:' + nconf.get('PORT'));
})
