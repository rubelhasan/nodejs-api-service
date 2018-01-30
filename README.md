I am developing an e-commerce platform using nodejs+elasticsearch+mongodb+react+redux. For image loading, I am using CDN (cloudinary) and for a primary database, I am using mongodb(only for writing purpose). My back-end api using elasticsearch to serve the API response. For back-end, I am following microservice architecture like api-service, email-service, message-service etc.

# nodejs-api-service
Building a RESTful API in Node and Express with Elasticsearch and Mongodb
-----
Please follow the below steps to setup this project in your local machine
-----
* To install Nodejs all other components run this ( npm install) into the server folder. 
* To run the project (npm start)
* To Run Elasticsearch docker image run this (docker-compose up) into the data-service/elasticsearch folder.
* If you want to use memory not any database change (app.sh) configuration like this export DATA_SOURCE=memory

