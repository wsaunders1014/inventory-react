var React = require('react');
var Container = require('./Container');
var Item = require('./Item');
class Items extends React.Component {
	render(){
		return(
			<Container id={this.props.id} heading={this.props.heading}>
			</Container>	
		)
	}
}

module.exports = Items;