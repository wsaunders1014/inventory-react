var React = require('react');
var Sidebar = React.createClass({
	render: function(){
		return (
			<div id={this.props.id} className="sidebar">
				<div className="wrapper">
					<div className="heading cancelSelect"></div>
					<div className="overflow">
						<div className="holder">
						</div>
					</div>
				</div>
				<div className="back-btn"></div>
			</div>
		)
	},
	componentDidMount: function(){
		document.getElementById(this.props.id).children[0].children[0].innerHTML = this.props.heading;
	}
});
module.exports = Sidebar;