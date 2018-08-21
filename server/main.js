var express = require('express');

var app = new express();

var mongoose = require('mongoose');

var parser = require('body-parser');

var mongoDB = "mongodb://ana:1997@appcluster-shard-00-00-zjisr.mongodb.net:27017,appcluster-shard-00-01-zjisr.mongodb.net:27017,appcluster-shard-00-02-zjisr.mongodb.net:27017/react_express_db?ssl=true&replicaSet=AppCluster-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

app.get('/',function(req,res){
    res.render('./../app/index.ejs',{});
})
    .use(express.static(__dirname + '/../.tmp'))
    .listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('../server/routes/items.js')(app);