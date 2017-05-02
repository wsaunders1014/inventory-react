var React = require('react');
var Container = require('./Container');
var Item = require('./Item');
class Items extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props)
	}
	render(){
		return(
			<Container id={this.props.id} heading={this.props.heading}>
				test
			</Container>	
		)
	}
}
module.exports = Items;