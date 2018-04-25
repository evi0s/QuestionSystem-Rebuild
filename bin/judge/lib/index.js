"use strict";
/**
 ** Judge Module
 **
 ** @version 0.0.1
 **
 */

var judge = module.exports;

/**
 ** Judge Integer
 **
 ** @param value
 **
 */

judge.judgeInteger = function(value){
  var strExp=/^-?\d+$/;
 	if(strExp.test(value)){
    return true;
 	}else{
    return false;
 	}
}

/**
 ** Judge Float
 **
 ** @param value
 **
 */

judge.judgeFloat = function(value){
  var strExp=/^-?\d*\.?\d+$/;
 	if(strExp.test(value)){
    return true;
 	}else{
    return false;
 	}
}

/**
 ** Judge Email
 **
 ** @param value
 **
 */

 judge.judgeEmail = function(value){
   var strExp=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  	if(strExp.test(value)){
     return true;
  	}else{
     return false;
  	}
 }

 /**
  ** Judge Username
  **
  ** @param value
  **
  */

judge.judgeUsername = function(value){
  var strExp=/^\w{4,16}$/;
   if(strExp.test(value)){
    return true;
   }else{
    return false;
   }
}

/**
 ** Judge Strong Password
 **
 ** @param value
 **
 */

judge.judgeStrongPassword = function(value){
 var strExp=/^.*(?=.{8,20})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&?]).*$/;
  if(strExp.test(value)){
   return true;
  }else{
   return false;
  }
}

/**
 ** Judge Medium Password
 **
 ** @param value
 **
 */

judge.judgeMediumPassword = function(value){
 var strExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
  if(strExp.test(value)){
   return true;
  }else{
   return false;
  }
}

/**
 ** Judge Weak Password
 **
 ** @param value
 **
 */

judge.judgeWeakPassword = function(value){
 var strExp=/^\w{6,20}$/;
  if(strExp.test(value)){
   return true;
  }else{
   return false;
  }
}
