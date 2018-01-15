/**
 * Created by yehuda on 15/01/18.
 */
//list of modules:
var webshot = require('webshot');
var port = (process.env.VCAP_APP_PORT || 3000);
var express = require("express");
var fs = require('fs');
var app = express();

//here you need to set the path to the root folder of your project:
var rootFolder = "/home/yehuda/Desktop/tagit";
//here we save the screenshots:
var imageFolderName = "images";

//this for redirect when you surf to www.localhost:3000
app.get('/', function (req, res) {
    console.log('GET /');
    var html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);

});

//here you can change the setting of the screenshot:
//for more information please see here -> https://github.com/brenden/node-webshot (scroll down to options tab)

var options = {
    windowSize: {width: 1600, height: 900},
    shotSize: {width: 'window', height: 'window'},
    shotOffset: {left: 0, right: 0, top: 0, bottom: 0},
    renderDelay: 500, //in milliseconds... its important, some webpages need to wait before taking screenshots, for now we wait half second, it makes the job.
    quality: 75,
    streamType: 'png',
    phantomConfig: {"ssl-protocol": "ANY", 'ignore-ssl-errors': 'true'}
};


/**
 * this is the most important method:
 * it listen to get request (www.localhost:3000/downloadImage?url=THE_WEBSITE_URL)
 * it render the url and return the screenshot of the url
 * if the url not exist it throws error
 */
app.get('/downloadImage', function (req, res) {
    var url = req.query.url;
    console.log(`GET: downloadImage for ${url} ...`);
    var time = Date.now();
    webshot(url, `${imageFolderName}/${time}.png`, options, function (err) {
        if (err) {
            res.end("error: cant take screenshoot!" + err.message);
            return console.log(err);
        }
        console.log("done");
        res.sendFile(`${imageFolderName}/${time}.png`, {"root": rootFolder});
    });
});


app.listen(port);
console.log("Server listening on port " + port);