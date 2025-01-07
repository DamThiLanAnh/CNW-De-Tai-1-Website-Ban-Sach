## setup
- step1 : fist created BE founder cd to the founder and run: npm init -y (create package.json), npm install express
- step2: create index.js file and write hello world run with command: node index.js
- step3: install nodemon
npm install -g nodemon
npm install --save-dev nodemon
- step4: install lib mongoose to working with mongodb : npm install mongoose --save 
- step5: create mongodb get password and connect
- step6: install and define dotenv (npm i dotenv)
- step7: create founder src with (book, users,orders, stats, middleware)
## code
### books
- step8: in founder book create book_mode.js to define Schema ,Model and manage model in MongoDB through Mongoose.
- step 9: in founder book create book_route.js to manage router related to books and import cors (npm i cors) to integration go to the index.js
- step 10: create controller (implement logic) writing API CRUD and check with postman
- step 11: font-end connect api
### order
