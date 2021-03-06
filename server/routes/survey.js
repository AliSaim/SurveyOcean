/*
  File name: SURVEY.js
  Group Number: Group 6
  Web App name: Survey Ocean
  Description: Responsible for routing survey page
*/
let express = require('express');
let router = express.Router();
// Modules required for database
let mongoose = require('mongoose');
// module required for authentication
let passport = require('passport');
// Defining the user model
let UserModel = require('../models/users');
let User = UserModel.User; // Alias for User Model - User object

// create a function to check if the user is authenticated
function requireAuth(req, res, next) {
  // check if the user is logged in
  if(!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('surveys/index', { 
    page: 'survey',
    title: 'Survey - Survey Ocean',
    fullname: req.user ? req.user.firstname + ' ' + req.user.lastname : '' 
  });
});

/* Create new survey */
router.get('/createNew', requireAuth, (req, res, next) =>{
  res.render('surveys/create', {
     page: 'survey',
     title: 'Survey - Survey Ocean',
     fullname: req.user ? req.user.firstname + ' ' + req.user.lastname : '' 
  });
})

/* Create new survey */
router.get('/mcq', requireAuth, (req, res, next) =>{
  res.render('surveys/mcq', {
     title: 'MCQ Survey - Survey Ocean',
     fullname: req.user ? req.user.firstname + ' ' + req.user.lastname : '' 
  });
})

/* Create new survey */
router.get('/tfq', requireAuth, (req, res, next) =>{
  res.render('surveys/tfq', {
     title: 'T/F Survey - Survey Ocean',
     fullname: req.user ? req.user.firstname + ' ' + req.user.lastname : '' 
  });
})

module.exports = router;