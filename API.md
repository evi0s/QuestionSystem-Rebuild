# API

## Login & Reg

### require
* username
* passwd
* email (reg-only)
* verify code (reg-only)

### route
POST
* /api/passport

#### Login

``` json
{ 
  "username" : "login-username" ,
  "passwd" : "login-passwd"
}
```

#### Reg

``` json
{ 
  "username" : "reg-username" ,
  "passwd" : "reg-passwd" ,
  "email" : "reg-email" ,
  "vcode" : "verify code"
}
```

## HomePage

### require
* user-id

### route
GET
* /api/{user-id}/home

## Problem

### require
* problem-id

### route
GET
* /api/problemlist
* /api/problem/{problem-id}/{detail | author}/
* /api/answer/{problem-id}/

## Discuss

### require
* post-id

### route
GET
* /api/discusslist
* /api/discuss/{post-id}/
