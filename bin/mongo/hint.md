# Hint

一些常见数据库操作

## 对一个文档内数组 增/删/改

示例集合结构
```json
{
    "name": "database" ,
    "tags": ["mongodb", "database", "NoSQL"]
}
```
参考自[Leshami的博客]("https://blog.csdn.net/leshami/article/details/55192965")

### 增

```js
// addToSet方法
db.col.update({"name":"database"},{ $addToSet : {"tags":"mysql"} });

// push方法
db.col.update({"name":"database"},{ $push : {"tags":"redis"} });
```
区别在于addToSet只有在数组中不存在时候才添加，如果已经存在了不会再添加，push不管插入的值原来数组里有没有都插入，即可以插入重复的值。

### 删

```js
// pull方法
db.col.update({"name":"database"},{ $pull : {"tags":"mysql"} });
```

### 查

```js
// eq方法
db.col.find({"name":"database" , "tags" : {$eq : "mysql"} });
```

### 改

```js
// $占位符使用
db.col.update({"name":"database" , "tags" : "mysql"},{ $set : {"tags.$" : "redis"} });
```

## 自增/自减 一个元素

```json
{
  "name" : "name" ,
  "count" : 1
}
```

```js
// inc方法
db.col.update({"name":"name"},{ $inc : {"count":1} });

db.col.update({"name":"name"},{ $inc : {"count": -1} });
```
