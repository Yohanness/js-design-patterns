import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  // bind path
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


// The onle below is let's say the real prod DB, the test one will be json server
// Use same express for test and for serving API to web app :
app.get('/users', function (req, res) {
  //Hard coding here but ler's pretend it is a real DB

  res.json([
    { "id": 1, "firstName": "Jojo", "lastName": "LB", "email": "jojo@gmail.com" },
    { "id": 2, "firstName": "Lily", "lastName": "Ma", "email": "lily@gmail.com" },
    { "id": 3, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" }
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
