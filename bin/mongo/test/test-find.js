var url = "mongodb://172.17.0.2:27017";
var mongo = require('../mongo.js')(url);

var findobj = {};

mongo.find("testapp","site",findobj,function(err,result){
  if(err) console.log(err);
  console.log(result);
});
