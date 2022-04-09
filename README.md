# online-learning-platform
## How To Use

### Local

- Make sure you have installed MySQL on your local and create `elemes` database
- Clone this repository into your local repository `git clone https://github.com/tsaqifrazin1/online-learning-platform.git`
- Run `npm install` => `npm run start-dev`
- If you get `listening on http://localhost:3000` on your console, then you need migrate and seed the data with `npx sequelize-cli db:migrate` ==> `npx sequelize-cli db:seed:all`
- you need create .env file with

##### .env
    DB_USER=    
    DB_PASSWORD=    
    DB_DATABASE=elemes  
    DB_DATABASE_TEST=elemes.Test    
    DB_HOST=localhost  
    DB_DIALECT=mysql    
    SECRET= 

    #cloudinary 
    CLOUDINARY_NAME=    
    CLOUDINARY_API_KEY= 
    CLOUDNINARY_API_SECRET=     

fill with your own credential
- now you can use this REST API

### Public Endpoint

  you can access the app publicly from
  `https://online-learning-platform-tsaqi.herokuapp.com/`

## REST API

## Admin (can access all endpoint)

### Auth

- #### Sign in with seed data

  ##### Request

  `POST /authentications`

        curl --location --request POST 'localhost:3000/authentications/' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "email": "user10@email.com",
            "pass": "1234567"
        }'

  ##### Response

        HTTP/1.1 201 Created
        X-Powered-By: Express
        Access-Control-Allow-Origin: *
        Content-Type: application/json; charset=utf-8
        Content-Length: 227
        ETag: W/"e3-oeQXNLilysJ3k1iCrLS8TPZn2vc"
        Date: Thu, 07 Apr 2022 07:12:57 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5
        
        {"status":"success","data":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEwIiwiZW1haWwiOiJ1c2VyMTBAZW1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2NDkzMTU1Nzd9.v1G5adtLj9kaU9qPV86VattaJHfyEZHqfwY0dC73jfY"}

## Users table

CRUD Users collections


- #### Read All User Data

  ##### Request

  `GET /user`

    curl --location --request GET 'localhost:3000/user' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 2441
    ETag: W/"989-+2N8kvqCRAgqP18jqnVVSkOgdJ4"
    Date: Thu, 07 Apr 2022 07:18:59 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"users":[{"id":1,"role":"admin","fullname":"tes update","email":"admin@email.com","image":"http://res.cloudinary.com/tsaqif-razin/image/upload/v1649302842/ftkvoh2rggdpkzsupczv.jpg","flag":"1","createdAt":"2022-04-07T03:06:41.000Z","updatedAt":"2022-04-07T03:40:42.000Z"},{.......}......]

- #### Get One User data by id

  ##### Request

  `GET /users/<id>`

    curl --location --request GET 'localhost:3000/user/18' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 210
    ETag: W/"d2-jCUSlSU9WaoGnx+aUowPEH8J2j0"
    Date: Thu, 07 Apr 2022 07:21:09 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"users":{"id":18,"role":"user","fullname":"user14","email":"user14@email.com","image":null,"flag":"1","createdAt":"2022-04-07T07:16:27.000Z","updatedAt":"2022-04-07T07:16:27.000Z"}}}

- #### Update User data by id

  ##### Request

  `PUT /user/<id>` (Using Cloudinary)

    curl --location --request PUT 'localhost:3000/user/18' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0' \
    --form 'photo=@"/C:/Users/Tsaqif/Downloads/picture-small.jpg"' \
    --form 'fullname="tes update"'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 300
    ETag: W/"12c-pJAQCTxGegkk4PKHdnxLIt5efcI"
    Date: Thu, 07 Apr 2022 07:22:30 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"users":{"id":18,"role":"user","fullname":"tes update","email":"user14@email.com","image":"http://res.cloudinary.com/tsaqif-razin/image/upload/v1649316150/wzwhjhqgzl0i0nbaitgx.jpg","flag":"1","createdAt":"2022-04-07T07:16:27.000Z","updatedAt":"2022-04-07T07:22:30.000Z"}}}

- #### Delete User data by 

  ##### Request

  `DELETE /user/<id>`

    curl --location --request DELETE 'localhost:3000/user/18' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 50
    ETag: W/"32-FxCclIw0ym3VBV+FhfA0FVn5X/E"
    Date: Thu, 07 Apr 2022 07:24:33 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","msg":"user berhasil dihapus"}

## Category

CRUD Category collection
    
- #### Create Categories Data

  ##### Request

  `POST /category`

    curl --location --request POST 'localhost:3000/category/' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "tes"
    }'

  ##### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 151
    ETag: W/"97-rSNTtP1ep9V1rIgyiobUztvC6p4"
    Date: Thu, 07 Apr 2022 07:27:45 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"category":{"flag":"1","id":8,"name":"tes","updatedAt":"2022-04-07T07:27:45.440Z","createdAt":"2022-04-07T07:27:45.440Z"}}}

- #### Get One Categories data by id

  ##### Request

  `GET category/<id>`

    curl --location --request GET 'localhost:3000/category/8' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 151
    ETag: W/"97-SS1HX6NKtPvnFfMtTnpU6Hkc900"
    Date: Thu, 07 Apr 2022 07:29:42 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"category":{"id":8,"name":"tes","flag":"1","createdAt":"2022-04-07T07:27:45.000Z","updatedAt":"2022-04-07T07:27:45.000Z"}}}

- #### Update Categories data by id

  ##### Request

  `PUT /category/<id>`

    curl --location --request PUT 'localhost:3000/category/8' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "update"
    }'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 154
    ETag: W/"9a-kULtkCIuJE9F31f32xpa2bLtJng"
    Date: Thu, 07 Apr 2022 07:31:14 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"category":{"id":8,"name":"update","flag":"1","createdAt":"2022-04-07T07:27:45.000Z","updatedAt":"2022-04-07T07:31:14.000Z"}}}

- #### Delete Categories data by \_id

  ##### Request

  `DELETE /category/<id>`

    curl --location --request DELETE 'localhost:3000/category/8' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 61
    ETag: W/"3d-i+NARX+Za/1gkrMZ2EAwRRD4is8"
    Date: Thu, 07 Apr 2022 07:33:23 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","msg":"category_course berhasil dihapus"}

## Course

CRUD Course collection

- #### Create Course Data

  ##### Request

  `POST /course`

    curl --location --request POST 'localhost:3000/course/' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0' \
    --form 'photo=@"/path/to/file"' \
    --form 'name="basic"' \
    --form 'price="0"' \
    --form 'category_course_id="1"' \
    --form 'module_total="72"' \
    --form 'time="90"'

  ##### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 222
    ETag: W/"de-hyse905OOwemo1Qoogqb8hbj768"
    Date: Thu, 07 Apr 2022 07:34:45 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"id":14,"name":"basic","price":"0","category_course_id":"1","module_total":"72","time":"90","updatedAt":"2022-04-07T07:34:44.968Z","createdAt":"2022-04-07T07:34:44.968Z","categoryCourseId":"1"}}

- #### Update One Course by id

  ##### Request

  `PUT /course/<id>`

    curl --location --request PUT 'localhost:3000/course/14' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0' \
    --form 'photo=@"/C:/Users/Tsaqif/Downloads/picture-small.jpg"' \
    --form 'name="update"'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 339
    ETag: W/"153-v1W79NBAndwliW1VGip24xor7tc"
    Date: Thu, 07 Apr 2022 07:40:01 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"courses":{"id":14,"category_course_id":1,"price":0,"name":"update","flag":"1","image":"http://res.cloudinary.com/tsaqif-razin/image/upload/v1649317201/icn2l2l1anwubyhawynn.jpg","module_total":"72","time":"90","createdAt":"2022-04-07T07:34:44.000Z","updatedAt":"2022-04-07T07:40:01.000Z","categoryCourseId":1}}}

- #### Delete One Course by id

  ##### Request

  `DELETE /course/<id>`

    curl --location --request DELETE 'localhost:3000/course/14' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 52
    ETag: W/"34-VArmuhCXmsX/g6bvEfIiwi1q19g"
    Date: Thu, 07 Apr 2022 07:42:26 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","msg":"course berhasil dihapus"}

## User_Course

User_Course

- #### Read All User_Course

  ##### Request

    `GET /user_course/`

    curl --location --request GET 'localhost:3000/user_course/' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2NDkyOTg2MTZ9.ENlYZ2rlhsjlAMXSZvaN6j2wJclBkZYP88IhiD7CkZ4'

    ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 192
    ETag: W/"c0-zFZVBwmSjnl+RMksC5zyVzjKmSA"
    Date: Thu, 07 Apr 2022 07:44:19 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"userCourse":[{"id":1,"course_id":3,"user_id":2,"flag":"1","createdAt":"2022-04-07T03:06:41.000Z","updatedAt":"2022-04-07T03:06:41.000Z","courseId":3,"userId":2}]}}

- #### Create User_Course data

    ##### Request

    `POST /user_course`

    curl --location --request POST 'localhost:3000/user_course' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEwIiwiZW1haWwiOiJ1c2VyMTBAZW1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2NDkyOTg2NjJ9.eAIzYwT4vKB7hkcuVlqHI0ZFtg-KVYy_wFR38FWsT4w' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "course_id": 11
    }'

    ##### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 199
    ETag: W/"c7-n0dm1rDRi53O9hgrMCaUGWgoJ10"
    Date: Thu, 07 Apr 2022 07:46:33 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"userCourseData":{"flag":"1","id":27,"course_id":11,"user_id":11,"updatedAt":"2022-04-07T07:46:33.715Z","createdAt":"2022-04-07T07:46:33.715Z","courseId":11,"userId":11}}}

- #### Delete User_Course data

    ##### Request

    `DELETE /user_course/<id>`

    curl --location --request DELETE 'localhost:3000/user_course/27' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

    ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 57
    ETag: W/"39-uKKiOEXUIWftnqXyFLMmSRY5Pyw"
    Date: Thu, 07 Apr 2022 07:48:25 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","msg":"user_course berhasil dihapus"}

- #### Get simple statistics

    ##### Request

    curl --location --request GET 'localhost:3000/course/stat/' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2NDkyOTg2MTZ9.ENlYZ2rlhsjlAMXSZvaN6j2wJclBkZYP88IhiD7CkZ4'

    ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 94
    ETag: W/"5e-zmMjRp2xV/RZuD49DJRyu+CHf5s"
    Date: Thu, 07 Apr 2022 07:51:24 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"stat":{"total_user":12,"total_course":11,"total_free_course":7}}}

### User (below is all the endpoint that user can access)

#### Create Users data (SignUp)

  ##### Request

  `POST /user`

        curl --location --request POST 'localhost:3000/user/signup/' \
        --form 'photo=@"/path/to/file"' \
        --form 'fullname="user14"' \
        --form 'email="user14@email.com"' \
        --form 'pass="1234567"'

  ##### Response

        HTTP/1.1 201 Created
        X-Powered-By: Express
        Access-Control-Allow-Origin: *
        Content-Type: application/json; charset=utf-8
        Content-Length: 257
        ETag: W/"101-O0HYxnjOTc2VXowAt3ye0qfVHQE"
        Date: Thu, 07 Apr 2022 07:16:27 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5
        
        {"status":"success","data":{"flag":"1","id":18,"role":"user","fullname":"user14","email":"user14@email.com","pass":"$2b$10$L.OORbhZCs0pQsW6iJen0.MFkG30bDYWQnntnYR3K2oTswtTgbMmW","updatedAt":"2022-04-07T07:16:27.776Z","createdAt":"2022-04-07T07:16:27.776Z"}}

- #### Read All Categories data

  ##### Request

  `GET /category`

    curl --location --request GET 'localhost:3000/category' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 622
    ETag: W/"26e-hAE81SaktrCxynEqmIriJGSjmX4"
    Date: Thu, 07 Apr 2022 07:26:16 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"category":[{"id":1,"name":"Basic","flag":"1","createdAt":"2022-04-07T03:06:40.000Z","updatedAt":"2022-04-07T03:06:40.000Z"},{"id":2,"name":"Fundamental","flag":"1","createdAt":"2022-04-07T03:06:40.000Z","updatedAt":"2022-04-07T03:06:40.000Z"},{"id":3,"name":"Intermediate","flag":"1","createdAt":"2022-04-07T03:06:40.000Z","updatedAt":"2022-04-07T03:06:40.000Z"},{"id":4,"name":"Expert","flag":"1","createdAt":"2022-04-07T03:06:40.000Z","updatedAt":"2022-04-07T03:06:40.000Z"},{"id":5,"name":"Master","flag":"1","createdAt":"2022-04-07T03:06:40.000Z","updatedAt":"2022-04-07T03:06:40.000Z"}]}}

- #### Read Popular Category

    ##### Request

    `GET /category/pupolar`

    curl --location --request GET 'localhost:3000/category/popular' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2NDkyOTg2MTZ9.ENlYZ2rlhsjlAMXSZvaN6j2wJclBkZYP88IhiD7CkZ4'

    ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 92
    ETag: W/"5c-uKjeqlebD4ZduaF1+uv4hSy5P2s"
    Date: Thu, 07 Apr 2022 07:56:04 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"category":{"popular_category":"Fundamental","total":6,"id":2}}}

- #### Read All Course

  ##### Request

  `GET /course`

    curl --location --request GET 'localhost:3000/course' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 2763
    ETag: W/"acb-NSc31pPEHxmTgutpMYcuXmf3ERY"
    Date: Thu, 07 Apr 2022 07:36:03 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"courses":[{"id":1,"category_course_id":1,"price":0,"name":"Belajar HTML","flag":"1","image":null,"module_total":"30","time":"30","createdAt":"2022-04-07T03:06:41.000Z","updatedAt":"2022-04-07T03:06:41.000Z","categoryCourseId":1},{...},...]

- #### Read One Course Data

  ##### Request

  `GET /course/<id>`

    curl --location --request GET 'localhost:3000/course/14' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJmdWxsbmFtZSI6InRlcyIsImVtYWlsIjoidGVzM0BlbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjQ5MjQ4MTM1fQ.HQeLXkZHMfoErtZzU08JUM8LLEgLoMqctbHsZGPz0Q0'

  ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 252
    ETag: W/"fc-kBhhpD815yUSC7ytLrb+6AcS7iM"
    Date: Thu, 07 Apr 2022 07:39:01 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"courses":{"id":14,"category_course_id":1,"price":0,"name":"basic","flag":"1","image":null,"module_total":"72","time":"90","createdAt":"2022-04-07T07:34:44.000Z","updatedAt":"2022-04-07T07:34:44.000Z","categoryCourseId":1}}}

- #### Search Course

    ##### Request

    `GET /course/search?name=<name>`

    curl --location --request GET 'localhost:3000/course/search?name=Belajar HTML' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2NDkyOTg2MTZ9.ENlYZ2rlhsjlAMXSZvaN6j2wJclBkZYP88IhiD7CkZ4'

    ##### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 114
    ETag: W/"72-yS+8L0XL9Jd/8xlX29uxMem7Luo"
    Date: Thu, 07 Apr 2022 07:59:07 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"courses":[{"module_total":"30","time":"30","name":"Belajar HTML","id":1,"price":0}]}}

- #### Sort Course
    ##### Lowest
     ###### Request

     `GET /course/sort/lowest`

     curl --location --request GET 'localhost:3000/course/sort/lowest' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2NDkyOTg2MTZ9.ENlYZ2rlhsjlAMXSZvaN6j2wJclBkZYP88IhiD7CkZ4'

    ###### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 1084
    ETag: W/"43c-OLaTsS5e2+aPeLkVhoy/o1ZGlck"
    Date: Thu, 07 Apr 2022 08:00:48 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"sort":[{"module_total":"30","time":"30","name":"Belajar HTML","id":1,"price":0},{"module_total":"30","time":"30","name":"Belajar CSS","id":2,"price":0},{"module_total":"50","time":"120","name":"Belajar Javascript","id":3,"price":0},{"module_total":"50","time":"120","name":"Belajar Python","id":4,"price":0},{"module_total":"50","time":"120","name":"Belajar Go-Lang","id":5,"price":0},{"module_total":"60","time":"120","name":"Cloud Computing","id":6,"price":0},{"module_total":"72","time":"90","name":"update course","id":11,"price":0},{"module_total":"72","time":"90","name":"basic css","id":12,"price":0},{"module_total":"72","time":"90","name":"update","id":14,"price":0},{"module_total":"80","time":"150","name":"Cloud Computing Intermediate","id":7,"price":200000},{"module_total":"90","time":"180","name":"Backend Developer Intermediate","id":8,"price":200000},{"module_total":"120","time":"240","name":"Backend Developer Expert","id":9,"price":250000},{"module_total":"150","time":"360","name":"Backend Developer Master","id":10,"price":300000}]}}

    ##### Highest
     ###### Request

     `GET /course/sort/highest`

     curl --location --request GET 'localhost:3000/course/sort/highest' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2NDkyOTg2MTZ9.ENlYZ2rlhsjlAMXSZvaN6j2wJclBkZYP88IhiD7CkZ4'

     ###### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 1084
    ETag: W/"43c-OCAWnh9NtOk8/8jIs/DhVoaM7WA"
    Date: Thu, 07 Apr 2022 08:03:12 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"sort":[{"module_total":"150","time":"360","name":"Backend Developer Master","id":10,"price":300000},{"module_total":"120","time":"240","name":"Backend Developer Expert","id":9,"price":250000},{"module_total":"80","time":"150","name":"Cloud Computing Intermediate","id":7,"price":200000},{"module_total":"90","time":"180","name":"Backend Developer Intermediate","id":8,"price":200000},{"module_total":"30","time":"30","name":"Belajar HTML","id":1,"price":0},{"module_total":"30","time":"30","name":"Belajar CSS","id":2,"price":0},{"module_total":"50","time":"120","name":"Belajar Javascript","id":3,"price":0},{"module_total":"50","time":"120","name":"Belajar Python","id":4,"price":0},{"module_total":"50","time":"120","name":"Belajar Go-Lang","id":5,"price":0},{"module_total":"60","time":"120","name":"Cloud Computing","id":6,"price":0},{"module_total":"72","time":"90","name":"update course","id":11,"price":0},{"module_total":"72","time":"90","name":"basic css","id":12,"price":0},{"module_total":"72","time":"90","name":"update","id":14,"price":0}]}}

    ##### Free
     ###### Request

     `GET /course/sort/free`

     curl --location --request GET 'localhost:3000/course/sort/free' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImZ1bGxuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2NDkyOTg2MTZ9.ENlYZ2rlhsjlAMXSZvaN6j2wJclBkZYP88IhiD7CkZ4'

     ###### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 707
    ETag: W/"2c3-bCQahpmwXlyRhnAm3fgGoWNqE4I"
    Date: Thu, 07 Apr 2022 08:04:42 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"status":"success","data":{"sort":[{"module_total":"30","time":"30","name":"Belajar HTML","id":1,"price":0},{"module_total":"30","time":"30","name":"Belajar CSS","id":2,"price":0},{"module_total":"50","time":"120","name":"Belajar Javascript","id":3,"price":0},{"module_total":"50","time":"120","name":"Belajar Python","id":4,"price":0},{"module_total":"50","time":"120","name":"Belajar Go-Lang","id":5,"price":0},{"module_total":"60","time":"120","name":"Cloud Computing","id":6,"price":0},{"module_total":"72","time":"90","name":"update course","id":11,"price":0},{"module_total":"72","time":"90","name":"basic css","id":12,"price":0},{"module_total":"72","time":"90","name":"update","id":14,"price":0}]}}