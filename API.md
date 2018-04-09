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
  "passwd" : "login-passwd" ,
  "action" : "login"
}
```
return value:
```json
{
  "code" : 1 ,
  "message" : "success"
}
{
  "code" : 2,
  "message" : "username_or_passwd_error"
}
{
  "code" : 3,
  "message" : "username_or_passwd_invaild"
}
```

#### Reg
``` json
{
  "username" : "reg-username" ,
  "passwd" : "reg-passwd" ,
  "email" : "reg-email" ,
  "vcode" : "verify code" ,
  "action" : "reg"
}
```
return value:
```json
{
  "code" : 1 ,
  "message" : "success"
}
{
  "code" : 2 ,
  "message" : "username_existed"
}
{
  "code" : 3 ,
  "message" : "form_contain_invaild_term"
}
{
  "code" : 4 ,
  "message" : "verify_code_error"
}
{
  "code" : 5 ,
  "message" : "verify_code_expired"
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
