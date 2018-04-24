var url = "mongodb://mongo:27017";
var mongo = require('../index.js')(url);

var findobj = {};

mongo.find("testapp","site",findobj,function(err,result){
  if(err) console.log(err);
  console.log(result);
});
