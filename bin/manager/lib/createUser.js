"use strict";

/**
 ** create a user
 **
 ** @param username
 ** @param password
 ** @param email
 ** @param callback
 **
 */

var fs = require('fs');

const init_config = JSON.parse(fs.readFileSync(`${__dirname}/../../../config.json`));

var database = init_config.database,
    url = "mongodb://" + init_config.host + ":27017",
    collection = "user";

var mongo = require('../../mongo')(url);

function createUser(username, password, email, callback){
  var insertData = {
      "username" : username ,
      "nickname" : username ,
      "email" : email ,
      "password" : password ,
      "intro" : "" ,
      "age" : 0 ,
      "message" : [] ,
      "problem_submitted" : [] ,
      "problem_solved" : [] ,
      "problem_composed" : [] ,
      "post" : []
  };
  mongo.insertOne(database, collection, insertData, function(err,results){
    if(err) callback(err);
    callback(null,results.insertedCount);
  });
}

module.exports = createUser;
