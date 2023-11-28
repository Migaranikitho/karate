const express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var con = mysql.createConnection({
  host: "localhost",
  user: "Migara",
  password: "MSQL2009",
  database: "karate"

});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
const port = 3001;
app.post('/blogs', (req, res) => {
  console.log(req.body);
  var sql = "insert into blogs(title,summary,detail,create_date) values(?,?,?,now())"
  con.query(sql, [req.body.title, req.body.summary, req.body.details], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted!");
  });
  res.send("ok");
})

app.get('/blogs', (req, res) => {
  con.query("select * from karate.blogs", function (err, result, fields) {
    if (err) throw err;
    console.log("Result: " + result);
    console.log("fields" + fields);
    res.send(result);
  });
})

app.post('/contactus', (req, res) => {
  console.log(req.body);
  var sql = "insert into detail(FirstName,secondName,phoneNumber,city,extraDetails) values(?,?,?,?)"
  con.query(sql, [req.body.title, req.body.summary, req.body.details], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted!");
  });
})

app.get('/contactus', (req, res) => {
  con.query("select * from karate.contactus", function (err, result, fields) {
    if (err) throw err;
    console.log("Result: " + result);
    console.log("fields" + fields);
    res.send(result);
  });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})