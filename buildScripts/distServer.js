import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();


// Not for actual production use.This is for hosting minified prod build for local debugging
app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  // bind path
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


// Comment following out, now we will use deployed API on Heroku
// // The onle below is let's say the real prod DB, the test one will be json server
// // Use same express for test and for serving API to web app :
// app.get('/users', function (req, res) {
//   //Hard coding here but ler's pretend it is a real DB

//   res.json([
//     { "id": 1, "firstName": "Jojo", "lastName": "LB", "email": "jojo@gmail.com" },
//     { "id": 2, "firstName": "Lily", "lastName": "Ma", "email": "lily@gmail.com" },
//     { "id": 3, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" }
//   ]);
// });

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    // Opens a browser
    open('http://localhost:' + port);
  }
});
