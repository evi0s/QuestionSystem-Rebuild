# VCode

验证码模块

## Collection Structure

```json
{
  "username" : "username" ,
  "email" : "email" ,
  "vcode" : "vcode" ,
  "expire_time" : 123123123 ,
  "method" : "Reg"
}
```

method为Reg或RevertPassword

expire_time为UNIX时间戳

## Usage

```js
var vcode = require('../index.js');

vcode.GenerateRegNewVCode("test", "test@test.com", "Reg" ,function(err, results){
  if(err) console.log(err);
  console.log(results);
  console.log(results.vcode);
  vcode.JudgeLatestVCode("test", results.vcode, "Reg", function(err, result){
    if(err) console.log(err);
    console.log(result);
  });
});
```

### vcode.GenerateRegNewVCode

生成新的验证码

### vcode.JudgeLatestVCode

对提交的验证码进行验证
