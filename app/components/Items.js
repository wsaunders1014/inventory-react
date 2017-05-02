var React = require('react');
var Container = require('./Container');
var Item = require('./Item');
class Items extends React.Component {
	constructor(props) {
		super(props);
	}
	// componentWillReceiveProps(nextProps) {
	// 	//console.log('nextProps:',nextProps)
	// 	if(typeof getFirstActiveCat(nextProps.user.inventory_obj.categories) != 'undefined'){
	// 		var activeCat = getFirstActiveCat(nextProps.user.inventory_obj.categories)
	// 		this.setState({heading:activeCat})
	// 	}
	// }
	render(){
		console.log(this.props)
		return(
			<Container id={this.props.id} heading={this.props.heading}>
			</Container>	
		)
	}
}

module.exports = Items;