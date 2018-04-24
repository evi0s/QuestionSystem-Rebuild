var url = "mongodb://172.17.0.2:27017";
var mongo = require('../mongo.js')(url);

var query = {name: "test2"};
var update_json = {$set:{'name':'test3'}};
var options = {upsert:false, multi:true};

mongo.update("testapp","site",query,update_json,function(err,results){
  if(err) console.log(err);
  console.log(results.result.n);
});

mongo.update("testapp","site",query,update_json,options,function(err,results){
  if(err) console.log(err);
  console.log(results.result.n);
});
