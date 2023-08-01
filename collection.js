var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("binshul");
    dbo.createCollection("jacob",function(err,res){
        if(err) throw err;
        console.log("created");
        db.close();


    });

});