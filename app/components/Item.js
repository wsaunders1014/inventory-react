var React = require('react');
var Item = React.createClass({
	render: function(){
		var x = -(133 * (this.props.index%4));
		var y = -(133 * Math.floor(this.props.index/4));
		return (
			<div className={this.props.className} id={this.props.title}>
				<div className="img" style={{backgroundPosition:x+'px '+y+'px'}}></div>
				<div className="bottom">
					<h4 className="cancelSelect">{this.props.title.split('_').join(' ')}</h4>
				</div>
			</div>
		)
	}
});
module.exports = Item;