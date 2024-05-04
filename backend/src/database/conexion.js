const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'pagoplux'
});

connection.connect((error) => {
  if(error){
    console.log("Error de connection"+ error);
    return "Error de connection";
  }

  console.log( "Connection successfully" );
});

module.exports = connection;