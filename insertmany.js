var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("binshul");

    var myobj = [
        {name:'rahul',address:'rahul bhavan'},
        {name:'manu',address:'manu villa'},
        {name:'vishnu',address:'vishnu bhavan'},
        {name:'akash',address:'akash villa'},
    ];

    dbo.collection("jacob").insertMany(myobj,function(err,res){

        if(err) throw err;
        console.log("document inserted");
        db.close();
    });

});