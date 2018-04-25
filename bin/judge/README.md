# Judge
Regular Expression Judger

## Usage

```js
var judge = require('../bin/judge');
```

### judge.judgeInteger

校验整数

### judge.judgeFloat

校验浮点数（正负均可）

### judge.judgeUsername

校验用户名
* 包含大写字母、小写字母或下划线
* 长度4位至16位

### judge.judgeEmail

校验邮箱

### judge.judgeStrongPassword

校验密码（要求强强度）

必须包含
* 大写字母
* 小写字母
* 数字
* !@#$%^&?这些字符

长度8位至20位

### judge.judgeMediumPassword

校验密码（要求中强度）

必须包含
* 大写字母
* 小写字母
* 数字
* **不能包含特殊字符**

长度6位至20位

### judge.judgeWeakPassword

校验密码（要求弱强度）

可以包含
* 大写字母
* 小写字母
* 数字
* 除下划线外，不能包含其他特殊字符

长度6位至20位
