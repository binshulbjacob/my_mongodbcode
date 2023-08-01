var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('binshul');
    var myquery={ address:'manu villa'};
    dbo.collection("jacob").deleteMany(myquery,function(err,obj){
        if(err) throw err;
        console.log(obj.result.n+" document(s) deleted");
        db.close();

    });

});