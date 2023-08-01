var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1/binshul";

MongoClient.connect(url,function(err,db){
    if(err) throw  err;
    console.log("Database created");
    db.close();
   });