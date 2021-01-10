# School-Communicate-BE

> Back End Design

> 校友汇。

## About Function

### Outline

- Login
- Register
- Article: Tag
  - comment
  - good（挂起
  - 转发。。。放一放：复制url
- Listen：Tips



### About Classification

1. Normal User
    - Jurisdiction：
      - Username
      - Realname
      - Gradge College Major
      - Email
      - Tel
      - Password
      - Location
2. Article：
    - TItle
    - ShortDescription
    - Main
    - Author
    - Tag
    - Comment

## About Table Design
userTable:
- u_id: pk number
- user_name: string
- password: string
- tel: string
- real_name: string
- college: number
- major: number
- grade: string
- loaction: string

articleTable:
- a_id: pk number
- author: fk u_id number
- short_desc: text
- main_text: text
- tag: string (JSON)

commentTable:
- c_id: pk number
- commenter_id: number fk u_id
- comment_content: text
- article_id: fk a_id number

## About API And Interface Design

