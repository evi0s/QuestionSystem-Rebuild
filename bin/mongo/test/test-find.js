var url = "mongodb://mongo:27017";
var mongo = require('../index.js')(url);

var findobj = {};

mongo.find("testapp","test",findobj,{"_id" :-1} ,function(err,result){
  if(err) console.log(err);
  console.log(result);
});
