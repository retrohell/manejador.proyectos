var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const i18n = require('i18n');
const config = require('config');

// mongo
const mongoose = require('mongoose');

//
// jwt
const expressJwt = require('express-jwt');
const jwtKey = config.get("secret.key");

var recordsRouter = require('./routes/records');
var backlogsRouter = require('./routes/backlogs');
var storiesRouter = require('./routes/stories');

const uri = config.get("dbChain");
mongoose.connect(uri);

const db = mongoose.connection;
var app = express();

// mongodb
db.on('error', () => {
  console.log("Can't connect to data base.");
});

db.on('open', () => {
  console.log("Connection succesful");
});

// i18nb
i18n.configure({
  locales: ['es', 'en'],
  cookie: 'language',
  directory: `${__dirname}/locales`
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // static resources
app.use(i18n.init);

/*
app.use(expressJwt({secret:jwtKey, algorithms:['HS256']}).unless({
  path:[
    "/login",
  ]
}));
*/

app.use('/records', recordsRouter);
app.use('/backlogs', backlogsRouter);
app.use('/stories', storiesRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
