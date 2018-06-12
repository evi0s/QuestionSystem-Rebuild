# mongo
Node.js MongoDB module

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

### mongo.String2ObjectId

```js
var str = "5b1e7f1e24e8ab001663b37a";

var oid = mongo.String2ObjectId(str);
```
Result will be a ObjectId object

### mongo.ObjectId2String

```js
var oid = new ObjectId();

var str = mongo.ObjectId2String(oid);
```
Result will be a String

### mongo.ObjectId2UnixTimeStamp

```js
var oid = new ObjectId("5b1e7f1e24e8ab001663b37a");

var unixtimestamp = mongo.ObjectId2UnixTimeStamp(oid);
```
Result will be unix timestamp

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
