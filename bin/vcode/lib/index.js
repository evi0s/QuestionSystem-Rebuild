"use strict";
/**
 ** VCode Module
 **
 ** @version 0.0.1
 **
 */

var vcode = module.exports;

var fs = require('fs');

const init_config = JSON.parse(fs.readFileSync(`${__dirname}/../../../config.json`));

var database = init_config.database,
    url = "mongodb://" + init_config.database_host + ":27017",
    collection = "vcode";

var mongo = require('../../mongo')(url);

/**
 ** Embedded function randomWord
 **
 ** @param randomFlag random length
 ** @param min
 ** @param max
 **
 */

function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        pos,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

/**
 ** Embedded function ExpireTime
 ** @param expire_time
 **
 */

function ExpireTime(expire_time){
    var time = Math.round(new Date().getTime()/1000) + expire_time;
    return time;
}


/**
 ** GenerateNewVCode
 **
 ** @param username
 ** @param email
 ** @param method
 ** @param callback
 **
 */

vcode.GenerateNewVCode = function(username, email, method, callback){
  var NewVCode = randomWord(true, 6, 8);
  var expire_time = ExpireTime(1800);
  var insert_json = {
    "username" : username ,
    "email" : email ,
    "vcode" : NewVCode ,
    "expire_time" : expire_time ,
    "method" : method
  };
  mongo.insertOne(database, collection, insert_json, function(err, results){
    if(err) callback(err);
    var callback_json = {
      "code" : results.insertedCount,
      "vcode" : NewVCode
    }
    callback(null, callback_json);
  });
}


/**
 ** JudgeLatestVCode
 **
 ** @param username
 ** @param vcode
 ** @param callback
 ** @param method
 **
 */

vcode.JudgeLatestVCode = function(username, vcode, method, callback){
  var find_obj = {
    "username" : username ,
    "vcode" : vcode ,
    "method" : method
  };
  var sort_option = {
    "_id" : -1
  }
  mongo.find(database, collection, find_obj, sort_option, function(err, results){
    if(err) callback(err);
    if(results.length){
      var currentTime = ExpireTime(0);
      if(results[0].expire_time > currentTime){
        var SuccessMsg = {
          "code" : 1 ,
          "message" : "SUCCESS"
        };
        callback(null,SuccessMsg);
      }else{
        var ExpiredMsg = {
          "code" : 5 ,
          "message" : "VERIFY_CODE_EXPIRED"
        };
        callback(ExpiredMsg);
      }
    }else{
      var ErrorMsg = {
        "code" : 4 ,
        "message" : "VERIFY_CODE_ERROR"
      };
      callback(ErrorMsg);
    }
  });
}
