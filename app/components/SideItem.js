var React = require('react');
class SideItem extends React.Component {
	constructor(props) {
		super(props);
	}	
	handleClick(e){

		var that = this;
		setTimeout(()=>{
		},400)
	}
	render(){
		return (
			<li>
				<div className="cat" id={"added-"+this.props.category.split(' ').join('_')}>{this.props.category}</div>
				<div className="close-btn">+</div>
				<div className="number">{this.props.user.inventory_obj.categories[this.props.category].total}</div>
			</li>
		)
	}
}

module.exports = SideItem;