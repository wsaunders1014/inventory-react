var React = require('react');
var ProgressStep = require('./ProgressStep')
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
});

module.exports = ProgressBar;