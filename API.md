# API

## Login & Reg

### Login

#### require
* username
* passwd

#### route
**POST**
* /api/passport/login

``` json
{
  "username" : "login-username" ,
  "passwd" : "login-passwd"
}
```
return value:
```json
{
  "code" : 1 ,
  "message" : "SUCCESS"
}
{
  "code" : 2,
  "message" : "USERNAME_OR_PASSWD_ERROR"
}
{
  "code" : 3,
  "message" : "USERNAME_OR_PASSWD_INVAILD"
}
```

### Reg

#### require
* username
* passwd
* email
* verify code

#### route
**POST**
* /api/passport/reg

``` json
{
  "username" : "reg-username" ,
  "passwd" : "reg-passwd" ,
  "email" : "reg-email" ,
  "vcode" : "verify code"
}
```
return value:
```json
{
  "code" : 1 ,
  "message" : "SUCCESS"
}
{
  "code" : 2 ,
  "message" : "USERNAME_EXISTED"
}
{
  "code" : 3 ,
  "message" : "FORM_CONTAIN_INVAILD_TERM"
}
{
  "code" : 4 ,
  "message" : "VERIFY_CODE_ERROR"
}
{
  "code" : 5 ,
  "message" : "VERIFY_CODE_EXPIRED"
}
```

## HomePage

### require
* user-id

### route
**GET**
* /api/{user-id}/home

## Problem

### require
* problem-id

### route
**GET**
* /api/problemlist
* /api/problem/{problem-id}/{detail | author}/
* /api/answer/{problem-id}/

## Discuss

### require
* post-id

### route
**GET**
* /api/discusslist
* /api/discuss/{post-id}/
