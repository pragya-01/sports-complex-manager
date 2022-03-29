const express = require('express');
const { NotExtended } = require('http-errors');

const db = require('../Config/Mongoose');
const Router = express.Router();
// const HomeController = require('../controllers/home_controller');

/* GET home page. */

Router.get('/', HomeController.home);
Router.get('/Home', HomeController.home);
Router.get('/teachers', HomeController.teachers);
Router.get('/services', HomeController.services);

// Router.get('/', function(req, res)
// {
//     return res.render('Home');
// })

// Router.get('/teachers', function(req, res)
// {
//     return res.render('teachers');
// })

// Router.use('/users', require('./users'));

// router.get('/', function(req, res)
// {
//     return res.render('Home')
// })

module.exports = Router;
