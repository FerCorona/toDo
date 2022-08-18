# toDo App


In order to use the project you need to have docker installed on your computer.

## Steps to set up the project

- Clone the repo
- Once inside the directory, insert the command ``` docker-compose build ```.

## Steps to start the project
- Once you have the project built, you can continue with the following.
- Insert the command ``` docker-compose up ```, to be able to start the project.
- Project is running on port ``` 8080 ```. http://localhost:8080/

## Steps to stop the project
- In the command line insert ``` ctl + c ``` an then ``` docker-compose down ```

You will see a board, with some dummy data, you can add more lists and task and you can edit them. 



## About files

In the project we have some dirs:

- ```api```: In this dir we have our server for back-end, we use Javascript, Node.js, Express and here we use Postgres to fetch data.
- ```client```: In this dir we have our assets for the front-end, we use Javascript, React, Webpack, Babel, Antd and Scss.
- ```nginx```: Here we have our proxy, to could allow back and front get communicated.
