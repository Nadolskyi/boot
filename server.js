const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');
app.set('view engine', 'jade');
app.use(express.static('public'));
 var db;

MongoClient.connect('mongodb://Nadolskyi:123qaz@ds127988.mlab.com:27988/mongo-crud', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(process.env.PORT, () => {
    console.log('server ruining');
  });
 });
app.use(bodyParser.urlencoded({extended: true}));

 app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
    });
 });
 
  app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})