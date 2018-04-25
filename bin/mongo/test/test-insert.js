var url = "mongodb://mongo:27017";
var mongo = require('../index.js')(url);

var insertobj = { name: "test2", url: "baidu.com" };

var insertData = {
    "username" : "username" ,
    "nickname" : "username" ,
    "email" : "email" ,
    "password" : "password" ,
    "intro" : "" ,
    "age" : 0 ,
    "message" : [] ,
    "problem_submitted" : [] ,
    "problem_solved" : [] ,
    "problem_composed" : [] ,
    "post" : []
};

mongo.insertOne("testapp","test",insertData,function(err,result){
  if(err) console.log(err);
  console.log(result.insertedCount);
});
