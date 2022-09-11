const mysql = require("mysql2");

const db = mysql.createConnection({
   host: "localhost",
   user:"root",
   password: "",
   database:"elzian_db"
});

db.connect((err) =>{
   if(err) throw err;
   console.log("Elzian DB Connected to server");
});

module.exports = db;