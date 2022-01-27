# Credits

The background image is from https://www.toptal.com/designers/subtlepatterns/concrete-wall/
The icons are from https://icons8.com/line-awesome

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the client side, the noteable modules are: axios, react-router-dom, uuid
In the server side, the noteable modules are: cors, dotenv, express, knex, uuid, mysql2

# Installing and initialising the build

Once the repo has been cloned, you will need to `npm install` in both the client and the server directories

To create the initial database, you are using knex (https://knexjs.org/)

From the server directory, run `knex migrate:latest` to create the database and the data tables
Then run `knex seed:run` to seed basic data to the tables

## Available Scripts

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In the server directory, you can run:

### `npm start`

This will start the server which runs on port 8080

The endpoints are (currently):
`exercises/`
`exercises/category/`
`exercises/category/:categoryId`
`exercises/children/`

On the client side, the paths are:
`/`
`/create/`
`/categories/`
`/categories/:categoryId`
`/exercises/`
`/exercises/:exerciseId/`

## Final notes

I accept that there are a fair number of commented out lines and console.log entries still floating about. They are in place while I continue to work on this app. Just because the Estate Agent wants to show off the house, you don't take down all the scaffolding.
