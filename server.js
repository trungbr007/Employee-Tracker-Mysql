const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '01697123060',
      database: 'company'
    },
    console.log('Connected to the company database.')
  );
//GET all the department field
  db.query(`SELECT * FROM department`, (err, rows) => {
    console.log(rows);
  });

  // Create a department
const sql = `INSERT INTO department (name) 
VALUES (?)`;
const params = ['Carleton'];

db.query(sql, params, (err, result) => {
if (err) {
console.log(err);
}
console.log(result);
});
  

  // Default response for any other request (Not Found)-catchall
app.use((req, res) => {
    res.status(404).end();
  });
  
  //Listening

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });