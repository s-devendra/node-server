
1. Install Node & Mysql database
2. Install git
3. Clone the project
4. go to project folder and  perform `npm install`
5. create databse name it as `datalist`
   
  create table using following query and import data.sql in database

  CREATE TABLE `datalist`.`cities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` NVARCHAR(150) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `price` DOUBLE NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `color` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`));


Perform following command to start the node service
- Configure database connection in `.env` file
- go to root path of folder and perform `npm run start`

-- now server is running on port 3000
-- hit the following url on browser or postman to check api

It will give you ssl certificate error please continue because I used self signed certificates 

Api to check all the data
  URL: https://localhost:3000/api/list
  TYPE : GET

Api to check sorted data in descending by ID
  URL: https://localhost:3000/api/list?sort=descending&sortBy=id
  TYPE : GET

Api to check sorted data in descending order by city
  URL: https://localhost:3000/api/list?sort=descending&sortBy=city
  TYPE : GET

Api to check sorted data in ascending order by start_date
  URL: https://localhost:3000/api/list?sort=ascending&sortBy=start_date
  TYPE : GET

Api to check filtered data between two dates
  URL: https://localhost:3000/api/list?sort=descending&sortBy=id&from_date=2012-04-12&to_date=2012-06-12
  TYPE : GET



