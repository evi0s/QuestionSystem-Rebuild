"use strict";
/**
 ** Mongo Database module
 **
 ** @version 0.0.6
 **
 */

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var url;

/**
 ** Export module
 **
 ** @param url mongoDB connection url
 **
 */

var mongo = module.exports = function(url_defined){
  if(!url_defined){
    url = "mongodb://localhost:27017";
  }
  url = url_defined;
  return mongo;
}

/**
 ** find (SELECT)
 **
 ** @param database
 ** @param collection
 ** @param find_json find the json
 ** @param sort_option
 **
 ** @return result json
 */

mongo.find = function(database,collection,find_json,sort_option,callback){
  MongoClient.connect(url, function(err, db) {
      //if (err) throw err;
      if(err) callback(err);
      var dbo = db.db(database);
      if (typeof sort_option === 'function') {
        callback = sort_option;
        sort_option = {"_id":1};
      }
      dbo.collection(collection).find(find_json).sort(sort_option).toArray(function(err, result) {
          //if(err) throw err;
          if(err) callback(err);
          //console.log(result);
          if(callback != undefined){
              callback(err,result);
          }
          db.close();
      });
  });
}

/**
 ** String2ObjectId
 **
 ** @param string
 **
 ** @return ObjectId
 */

mongo.String2ObjectId = function(string){
  return new ObjectId(string);
}

/**
 ** ObjectId2String
 **
 ** @param ObjectId
 **
 ** @return string
 */

mongo.ObjectId2String = function(Objectid){
  return Objectid.toString();
}

/**
 ** ObjectId2UnixTimeStamp
 **
 ** @param ObjectId
 **
 ** @return int
 */

mongo.ObjectId2UnixTimeStamp = function(Objectid){
  return Math.round(Date.parse(Objectid.getTimestamp())/1000);
}

/**
 ** insertOne (INSERT)
 **
 ** @param database
 ** @param collection
 ** @param insert_json insert the json into collection
 **
 ** @return result.insertedCount
 */

mongo.insertOne = function(database,collection,insert_json,callback){
  MongoClient.connect(url, function(err, db) {
      //if (err) throw err;
      if(err) callback(err);
      var dbo = db.db(database);
      dbo.collection(collection).insertOne(insert_json, function(err, result) {
          //if (err) throw err;
          if(err) callback(err);
          //console.log("result");
          if(callback != undefined){
              callback(err,result);
          }
          db.close();
      });
  });
}

/**
 ** insertMany (INSERT)
 **
 ** @param database
 ** @param collection
 ** @param insert_arr insert the json arrary into collection
 **
 ** @return result.insertedCount
 */

mongo.insertMany = function(database,collection,insert_arr,callback){
  MongoClient.connect(url, function(err, db) {
      //if (err) throw err;
      if(err) callback(err);
      var dbo = db.db(database);
      dbo.collection(collection).insertMany(insert_arr, function(err, result) {
          //if (err) throw err;
          if(err) callback(err);
          //console.log("result");
          if(callback != undefined){
              callback(err,result);
          }
          db.close();
      });
  });
}

/**
 ** update (UPDATE)
 **
 ** @param database
 ** @param collection
 ** @param query_json find (WHERE)
 ** @param update_json update the json finded
 ** @param options update options (upsert:if no result, insert it; multi:update many)
 **
 ** @return update results
 */

mongo.update = function(database,collection,query_json,update_json,options,callback){
  MongoClient.connect(url, function(err, db) {
      //if (err) throw err;
      if(err) callback(err);
      var dbo = db.db(database);
      if (typeof options === 'function') {
        callback = options;
        options = {upsert:true, multi:false};
      }
      dbo.collection(collection).update(query_json,update_json,options, function(err, result) {
          //if (err) throw err;
          if(err) callback(err);
          //console.log("result");
          if(callback != undefined){
              callback(err,result);
          }
          db.close();
      });
  });
}

/**
 ** remove (DELETE)
 **
 ** @param database
 ** @param collection
 ** @param delete_json delete the json finded
 ** @param option delete one or all matched
 **
 ** @return remove result
 */

mongo.remove = function(database,collection,delete_json,option,callback){
  MongoClient.connect(url, function(err, db) {
      //if (err) throw err;
      if(err) callback(err);
      var dbo = db.db(database);
      if (typeof option === 'function') {
        callback = option;
        option = {justOne:false};
      }
      dbo.collection(collection).remove(delete_json,option, function(err, result) {
          //if (err) throw err;
          if(err) callback(err);
          //console.log(result);
          if(callback != undefined){
              callback(err,result);
          }
          db.close();
      });
  });
}
