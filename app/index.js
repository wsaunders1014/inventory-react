var React = require('react');
var ReactDOM = require('react-dom');
var app = document.getElementById('app');
//var routes = require('./config/routes');
var ProgressStep = React.createClass({
	render:function(){
		return (
			<div className={"step"+this.props.addClasses}>
				<div className="select-bg"></div>
				<span>{this.props.text} </span>
				<img src="img/checkmark.svg"/>
			</div>
		)
	}
})
var ProgressBar = React.createClass({
	render: function(){
		return (
			<div id="progress-bar" className="clearfix">
				<ProgressStep addClasses=" active" text="SELECT CATEGORIES" />
				<ProgressStep addClasses=" two" text="LARGE ITEMS" />
				<ProgressStep addClasses=" two" text="ADD BOXES" />
				<ProgressStep addClasses=" three" text="REVIEW INVENTORY" />
				<ProgressStep addClasses="" text="COMPLETED" />
			</div>
		)
	}
})
var Main = React.createClass({
	render: function(){
		return (
			<div id="wrapper" className="clearfix">
				<ProgressBar/>
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