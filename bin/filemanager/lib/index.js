"use strict";
/**
 ** FileManager Module
 **
 ** @version 0.0.1
 **
 */

var filemanager = module.exports;

var fileUpload = require('express-fileupload');

var fs = require('fs');

const init_config = JSON.parse(fs.readFileSync(`${__dirname}/../../../config.json`));

var database = init_config.database,
    url = "mongodb://" + init_config.database_host + ":27017",
    collection = "filemanager";

var mongo = require('../../mongo')(url);


/**
 ** Judge existence of upload file
 **
 ** @param req
 ** @return bool
 **
 */

filemanager.JudgeExistenceOfUploadFile = function(req){
  var UploadFile = req.files.file;
  var find_obj = {
    "md5" : UploadFile.md5
  };

  mongo.find(database, collection, find_obj, function(err, results){
    if(err) throw err;
    if(results.length){
      return true;
    }else{
      return false;
    }
  });
}

/**
 ** Save the file
 **
 ** @param req
 ** @param callback
 **
 */

filemanager.SaveUploadFile = function(req, callback){
  var UploadFile = req.files.file;
  var success_msg = {
    "code" : 1,
    "msg" : "SUCCESS",
    "url" : init_config.static_file_url + UploadFile.md5
  };
  var error_msg = {
    "code" : 2,
    "msg" : "ERR_PROCESSING_FILES"
  };

  if(filemanager.JudgeExistenceOfUploadFile(req)){
    callback(null, success_msg);
  }else{
    var insertobj = {
      "name" : UploadFile.name,
      "md5" : UploadFile.md5
    };
    mongo.insertOne(database, collection, insertobj, function(err,results){
      if(err)  callback(err);
      sampleFile.mv(init_config.upload_directory + UploadFile.md5, function(err) {
        if (err) callback(err);
        callback(null, success_msg);
      });
    });
  }
}
