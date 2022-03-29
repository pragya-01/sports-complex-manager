const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 8000;

const app = express();
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', require('./routes/index'));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// // use express router


app.listen(port, function(err){
  if (err) {
      console.log("Error in running the server", err);
  }
  console.log('Yup!My Server is running on Port', port);
})

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
