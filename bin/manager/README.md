# Manager

User Manager

## Database struct

```json
{
  "username" : "string" ,
  "nickname" : "string" ,
  "email" : "string" ,
  "password" : "string" ,
  "intro" : "string" ,
  "age" : "integer" ,
  "message" : [
    {
      "from_user" : "string" ,
      "content" : "string"
    }
  ] ,
  "problem_submitted" : [
    { "problem_id" : "integer" ,
      "status" : "queue" ,
      "score" : "integer"
    } ,
    {
      "problem_id" : "integer" ,
      "status" : "handled" ,
      "score" : "integer"
    }
  ] ,
  "problem_solved" : ["arrary"] ,
  "problem_composed" : ["arrary"] ,
  "post" : ["integer"]
}
```
