# Mailer

Mail Module

## Usage

```js
var mailer = require('../index.js');

var to_user = "1417213864@qq.com";

var vcode = "EXAMPLE";

mailer.SendRegVcode(to_user, vcode, function(err, info){
  if(err) console.log(err);
  console.log(info);
});

mailer.SendRevertPasswordVcode(to_user, vcode);
```

### mailer.SendRegVcode

发送注册验证码

### mail.SendRevertPasswordVcode

发送重置密码验证码
