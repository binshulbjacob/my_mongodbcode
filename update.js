var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("binshul");
    var myquery={ address:"rahul bhavan"};
    var newvalues={$set:{name:"rahul",address:"rahul smithy"}};
    dbo.collection("jacob").updateOne(myquery,newvalues,function(err,res){
        if (err) throw err;
        console.log("1 updated");
        db.close();

    });

});