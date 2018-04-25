"use strict";

/**
 ** Login controller
 **
 ** @param username
 ** @param password
 ** @param callback
 **
 */

var fs = require('fs');

const init_config = JSON.parse(fs.readFileSync(`${__dirname}/../../../config.json`));

var database = init_config.database,
    url = "mongodb://" + init_config.host + ":27017",
    collection = "user";

var mongo = require('../../mongo')(url);

var encryptor = require('../../encryptor');

function LoginHandle(username, password, callback){
  var encrypted_password = encryptor.encrypt(password);
  var find_json = {
    "username" : username ,
    "password" : encrypted_password
  };
  mongo.find(database, collection, find_json, function(err, results){
    if(err) callback(err);
    if(results.length){
      var success_json = {
        "code" : 1 ,
        "message" : "SUCCESS"
      };
      callback(null,success_json);
    }else{
      var err_json = {
        "code" : 2,
        "message" : "USERNAME_OR_PASSWD_ERROR"
      };
      callback(err_json);
    }
  })
}

module.exports = LoginHandle;
