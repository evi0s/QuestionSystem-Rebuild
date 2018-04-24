# mongo
Node.js MongoDB module

NOT Tested Yet
## Usage

```js
var url = "mongodb://172.17.0.3:27017";
var mongo = require('./mongo.js')(url);
```

### mongo.find

```js
var findobj = {};

mongo.find(database,collection,findobj,function(err,results){
  if(err) console.log(err);
  console.log(results);
});
```
Result will be a json object

### mongo.insertOne

```js
mongo.insertOne(database,collection,insertobj,function(err,results){
  if(err) console.log(err);
  console.log(results);
});
```
Result will be a json object

Use results.insertedCount or results.insertedId

### mongo.insertMany

```js
mongo.insertMany(database,collection,insertarr,function(err,results){
  if(err) console.log(err);
  console.log(results);
});
```
Result will be a json object

Use results.insertedCount or results.insertedIds

### mongo.update

```js
var options = {upsert:<bool>, multi:<bool>};
//upsert : if query not matched, insert it
//multi: if query matched many, update them

mongo.update(database,collection,query_json,update_json,options,function(err,results){
  if(err) console.log(err);
  console.log(results);
});
```
Result will be a json object

Use results.result.n to get changes

### mongo.remove

```js
var options = {justOne:<bool>};
//justOne : if delete_json matched many, delete them

mongo.remove(database,collection,delete_json,options,function(err,results){
  if(err) console.log(err);
  console.log(results);
});
```
Result will be a json object

Use results.result.n to get changes
