# Myapi
A customizable Api for any purposes(V0.12). This Work is under Development wait untill version 1 for User Interface
* * * * *

### Step 1:
Create An Account at [Mongo Atlas](https://www.mongodb.com/cloud/atlas) and create a cluster
*******
### Step 2:
Clone the myapi using git and create .env file at root directory
*******
### Step 3:
install nodejs and run `npm install` in the root directory
*******
### Step 4:
In the .env file create a variable `DB_CONN={your cluster Connnection string}`. Eg `DB_CONN=mongodb+srv://<user>:<password>@cluster0-3ta8h.mongodb.net/test?retryWrites=true&w=majority`  use Username for `<user>` and password for `<password>`.
run `node index` in root and wait for `Connected to DB!` message in the console
*******
### Step 5:
Put all _static files(if any)_ to be served in the `/public` folder (All files run at localhost:8080).
*******
### Step 6:
Create a DB model within the models directory and create schema with this [reference](https://github.com/Joe-Ralph/myapi/blob/master/models/Item.js) in which you want the data to be modeled.
Refer mongoose [Docs](https://mongoosejs.com/docs/guide.html) for more Information.

*******
### Step 7:
- Create a file for routing under `/routes` folder for routing your data from URL.
- Import the model file into your recently created route file.
- Create db record creating template as per the model given.
- Edit the `any` factor in the CRUD operations to perform operation on a specific field.

*******
### Step 8:
Use the newly created route file as middleware in the index.js file.
*******
### Step 9:
Rerun the index file using `node index` and checkout for errors in the console. In case of no errors, then checkout `localhost:8080/api` for api root or `localhost:8080/api/{your route file name}` for the custom created routes.
