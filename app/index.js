var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var app = document.getElementById('app');
var routes = require('./config/routes');

//var routes = require('./config/routes');
import Promise from 'promise-polyfill'; 

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}


ReactDOM.render(routes, app);

/*
App-
  -Progress Bar
  -Category Container
  	-Category extends Item
  -Cat Sidebar
  -Item Container 
  	-Item
  -Box Container
   	-Box extends Item
  -Save Button
  -Email Section
  -Review extends Container
  -Review Sidebar
  -Final page
*/