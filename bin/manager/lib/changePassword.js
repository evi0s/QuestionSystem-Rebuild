"use strict";

/**
 ** change password
 **
 ** @param username
 ** @param old_password
 ** @param new_password
 ** @param callback
 **
 */

var fs = require('fs');

const init_config = JSON.parse(fs.readFileSync(`${__dirname}/../../../config.json`));

var database = init_config.database,
    url = "mongodb://" + init_config.host + ":27017",
    collection = "user";

var mongo = require('../../mongo')(url);

var LoginHandle = require('./LoginHandle.js');

var encryptor = require('../../encryptor');

function changePassword(username, old_password, new_password, callback){
  LoginHandle(username, old_password, function(err, results){
    if(err) callback(err);
    if(results.code == 1){
      var encrypted = encryptor.encrypt(new_password);
      var update_bson = {
        $set : {
          'password' : encrypted
        }
      };
      mongo.update(database, collection, find_json, update_bson, function(err, results){
        if(err) callback(err);
        callback(results.result);
      });
    }
    else{
      var errmessage = {
        "code" : 2,
        "message" : "USERNAME_OR_PASSWD_ERROR"
      };
      callback(errmessage);
    }
  });
}

module.exports = changePassword;
