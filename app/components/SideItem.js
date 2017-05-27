var React = require('react');
class SideItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {className:this.props.className || 'animate-in'};
	}	
	handleClick(e){
		this.setState({className:"animate-out"});
		e.persist();
		var that = this;
		var e = e;
		
		setTimeout(()=>{
			that.props.removeCategory(this.props.category);
			//that.setState({className:""});
		},400)
	}
	render(){
		return (
			<li className={this.state.className}>
				<div className="cat" id={"added-"+this.props.category.split(' ').join('_')}>{this.props.category}</div>
				<div onClick={this.handleClick} className="close-btn">+</div>
				<div className="number">{this.props.user.inventory_obj.categories[this.props.category].total}</div>
			</li>
		)
	}
	componentDidMount() {
		setTimeout(()=>{
			var list = document.getElementsByClassName('animate-in');
			for(let i = 0;i <list.length;i++){
				list[i].className="item";
			}
		},500)
		
	}
}

module.exports = SideItem;