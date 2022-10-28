
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { Console } = require('console');

app.use(express.static(path.join(__dirname,'public')));

// HTTP Logger
app.use(morgan('tiny'));

// Template engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening at localhost:${port}`)
})

