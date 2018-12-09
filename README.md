## GraphQl Server

A graphql server implemented using:

- nodeJs
- express
- mongodb
- mongoose
- graphQL

Other used:

- gulp
- gulp-jshint
- nodemon
- underscore

___


**Database**: Mongo.


___

#Install process:

-1 Clone repository:

    git clone https://github.com/ugeHidalgo/graphqlserver1.git  graphqlserver1
    (This will clone the repository to a graphqlserver1 folder)

-2 Install:

    - Install mongodb downloading from http://www.mongodb.org
        Set path for databases with mongod --dbpath path

    - Install dependecies needed:
    ```
        cd graphqlserver1
        npm install
    ```

-3 Run:
    Launch mongoDB in a console:
    ```
        mongod
    </code>
    Launch server with any of these options:
    ```
        - npm start
        - gulp
        - gulp default
        - gulp develop
    ```
    Access site to http://localhost:3000

-4 Debug server side with the debugger in visual studio code or with node inspector:
    ```
    node --inspect --debug .
    Copiar url y pegar en un browser.
    ```

-5 Remote Data base can also be used hosted in mLab (Need to change local db config to remote. See dbConfig.js to change it)




## Backup and restore

sudo mongodump --db mowizz --out /Users/ugeHidalgo/Documents/graphqlserver1/backups/

sudo mongorestore --db graphqlserver1 --drop /Users/ugeHidalgo/Documents/graphqlserver1/backups/