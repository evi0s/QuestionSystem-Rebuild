# 凌睿工作室答题系统重制

## 简介

还没想好（逃

## 基础架构

* 基于Node.js的express框架
* Session使用Redis存储以提高性能
* 数据库使用NoSQL数据库：MongoDB
* 使用cluster模块提高多核CPU利用率
* 使用Nginx做反向代理及静态文件分发(或CDN)以实现高并发及API的URL简洁化
* 后期将加入HTTPS和HTTP2的支持
* 网页前端将使用HTML5+CSS3+bootstrap+~~JQuery~~+**drypot**

## 网站API

* 参考API.md
* 移动端与网页端将使用统一API
