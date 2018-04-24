var url = "mongodb://172.17.0.2:27017";
var mongo = require('../mongo.js')(url);

var deletejson = { name: "test2", url: "baidu.com" };

mongo.remove("testapp","site",deletejson,function(err,results){
  if(err) console.log(err);
  console.log(results.result.n);
});

mongo.remove("testapp","site",deletejson,{justOne:true},function(err,results){
  if(err) console.log(err);
  console.log(results.result.n);
});
