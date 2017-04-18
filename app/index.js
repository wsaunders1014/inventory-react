var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');
var ProgressBar = require('./components/ProgressBar')
//var routes = require('./config/routes');

var Main = React.createClass({
	render: function(){
		return (
		<div style={{minHeight:'calc(100% - 145px)',overflow:'visible',width:'100%'}}>
			<div id="wrapper" className="clearfix">
				<ProgressBar/>
				<div id="content" className="clearfix">

				</div>
			</div>
		</div>
		)
	}
});
ReactDOM.render(<Main/>, app);


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