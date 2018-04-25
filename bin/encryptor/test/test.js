var encrypt = require('../index.js');

var str = "qrs0301";

var encrypted = encrypt.encrypt(str);

console.log(encrypted);

console.log(encrypt.judge(str,encrypted));
