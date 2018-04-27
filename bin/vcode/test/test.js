var vcode = require('../index.js');

vcode.GenerateNewVCode("test", "test@test.com", "Reg" ,function(err, results){
  if(err) console.log(err);
  console.log(results);
  console.log(results.vcode);
  vcode.JudgeLatestVCode("test", results.vcode, "Reg", function(err, result){
    if(err) console.log(err);
    console.log(result);
  });
});
