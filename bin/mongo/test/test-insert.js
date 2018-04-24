var url = "mongodb://172.17.0.2:27017";
var mongo = require('../mongo.js')(url);

var insertobj = { name: "test2", url: "baidu.com" };

mongo.insertOne("testapp","site",insertobj,function(err,result){
  if(err) console.log(err);
  console.log(result.insertedCount);
});
