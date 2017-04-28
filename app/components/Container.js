var React = require('react');
var Item = require('./Item');
var Container = React.createClass({
	render: function(){
		return (
			<div id={this.props.id} className='main'>
				<div className="heading cancelSelect"></div>
				<div className="overflow">
					<div id="cat-holder" className="holder clearfix">
						<Item title="Dressers_&_Cabinets"/>
					</div>
					<div className="slide-track"><div className="slider"></div></div>
				</div>
			</div>	
		)
	},
	componentDidMount: function(){
		document.getElementById(this.props.id).children[0].innerHTML = this.props.heading;
	}
});
module.exports = Container;