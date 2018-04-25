var judge = require('../index.js');

var int = 123123123;

console.log("judgeInteger result:" + judge.judgeInteger(int));

var float = 123.123;
var float_t = 123;

console.log("judgeFloat result:" + judge.judgeFloat(float));
console.log("judgeFloat result:" + judge.judgeFloat(float_t));

var username = "qrs0301";
var username_f = "qrs0301-";
var username_t = "Qrs0301_";

console.log("judgeUsername result:" + judge.judgeUsername(username));
console.log("judgeUsername result:" + judge.judgeUsername(username_f));
console.log("judgeUsername result:" + judge.judgeUsername(username_t));

var email = "example@example.com";
var email_f = "example@example.com.";

console.log("judgeEmail result:" + judge.judgeEmail(email));
console.log("judgeEmail result:" + judge.judgeEmail(email_f));

var strongpasswd = "Qrs03010!";
var strongpasswd_f1 = "Qrs03010";
var strongpasswd_f2 = "qrs03010";
var strongpasswd_f3 = "qrs03010-";

console.log("judgeStrongPassword result:" + judge.judgeStrongPassword(strongpasswd));
console.log("judgeStrongPassword result:" + judge.judgeStrongPassword(strongpasswd_f1));
console.log("judgeStrongPassword result:" + judge.judgeStrongPassword(strongpasswd_f2));
console.log("judgeStrongPassword result:" + judge.judgeStrongPassword(strongpasswd_f3));

var mediumpasswd = "Qrs03010";
var mediumpasswd_f1 = "Qrs03010!";
var mediumpasswd_f2 = "qrs03010";

console.log("judgeMediumPassword result:" + judge.judgeMediumPassword(mediumpasswd));
console.log("judgeMediumPassword result:" + judge.judgeMediumPassword(mediumpasswd_f1));
console.log("judgeMediumPassword result:" + judge.judgeMediumPassword(mediumpasswd_f2));

var weakpasswd = "qrs03010";
var weakpasswd_t1 = "Qrs03010";
var weakpasswd_t2 = "Qrs03010_";
var weakpasswd_f = "Qrs03010!";

console.log("judgeWeakPassword result:" + judge.judgeWeakPassword(weakpasswd));
console.log("judgeWeakPassword result:" + judge.judgeWeakPassword(weakpasswd_t1));
console.log("judgeWeakPassword result:" + judge.judgeWeakPassword(weakpasswd_t2));
console.log("judgeWeakPassword result:" + judge.judgeWeakPassword(weakpasswd_f));
