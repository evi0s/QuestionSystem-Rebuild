"use strict";
/**
 ** Encrypt Module
 **
 ** @version 0.0.1
 **
 */

var encrypt = module.exports;

var crypto = require('crypto');

var salt1 = "hwfhc";

var salt2 = "lrworkshop";

/**
 ** Encrypt
 **
 ** @param string
 **
 */

encrypt.encrypt = function(string){
  var md5 = crypto.createHash('md5');
  var salted = string + salt1;
  var middleware = md5.update(salted).digest('hex');
  var final = crypto.createHmac('sha256', middleware).update(salt2).digest('hex');
  return final;
}

/**
 ** Judge
 **
 ** @param string
 ** @param encrypted_string
 **
 */

encrypt.judge = function(string, encrypted_string){
  var test_string = encrypt.encrypt(string);
  if(test_string == encrypted_string){
    return true;
  }else{
    return false;
  }
}
