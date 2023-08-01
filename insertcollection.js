var MongoClient=require("mongodb").MongoClient;
var url ="mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
     if(err) throw err;
     var dbo=db.db("binshul");
     var myobj = { name: "Rahul", address: "Rahul Bhavan" };
     dbo.collection("jacob").insertOne(myobj, function(err, res) {
       if (err) throw err;
       console.log("1 document inserted");
       db.close();
     });
});