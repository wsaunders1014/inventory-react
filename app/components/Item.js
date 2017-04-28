var React = require('react');
var Item = React.createClass({
	render: function(){
		return (
			<div className="item" id={this.props.title}>
				<div className="img" ></div>
				<div className="bottom">
					<h4 className="cancelSelect">{this.props.title.split('_').join(' ')}</h4>
				</div>
			</div>
		)
	}
});
module.exports = Item;