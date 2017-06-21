var express = require('express');
var mime = require('mime');
var mapping = require('./mapping.json');
var fs = require('fs');
var app = express.Router();

app.get("/", (req, res) => res.json({message: "Welcome to our API!"}));

let send_icon = (res, ext, typefile) => {

    let iconfile = mapping[ext];

    if (!iconfile) {
        res.status(404).send("Icon not found");
        return;
    }

    let filename = './icons/' + typefile + '/' + iconfile + '.' + typefile;
    try {
        let img = fs.readFileSync(filename);
        let mimetype = mime.lookup(filename);

        res.writeHead(200, {'Content-Type': mimetype });
        res.end(img, 'binary');
    } catch (err) {
        res.status(404).send("Icon not found (mapping error)");
    }
}

app.get('/icon/svg/:file.:extension', (req, res) => {
    let ext = req.params.extension;
    send_icon(res, ext, 'svg');
});

app.get('/icon/png/:file.:extension', (req, res) => {
    let ext = req.params.extension;
    send_icon(res, ext, 'png');
});

module.exports = app;

