var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

const init_config = JSON.parse(fs.readFileSync(`${__dirname}/config.json`));

var redis_options = {
     "host": init_config.redis_host,
     "port": init_config.redis_port,
     "ttl": init_config.session_ttl   //Session ttl
};

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var logDirectory = path.join(__dirname, 'log');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
});

// setup the logger
app.use(logger('combined', {stream: accessLogStream}));
app.use(logger('dev'));

// set Redis as session engine
app.use(session({
     resave:false,
     saveUninitialized: true,
     store: new RedisStore(redis_options),
     secret: 'hwfhc'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
