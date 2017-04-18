var React = require('react');
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
});
module.exports = ProgressStep;