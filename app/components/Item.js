var React = require('react');
class Item extends React.Component {
	constructor(props) {
		super(props);

		this.state = {className:this.props.className}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.className !== nextProps.className){
			this.setState({className:nextProps.className})
		}
	}
	render(){
		return (
			<div className={this.state.className} id={this.props.title.split(' ').join('_')} onClick={this.handleClick}>
				<div className="img" style={{background:'url(/img/items/'+((this.props.itemObj.image === true) ? this.props.itemObj.item_name.split(' ').join('_'):this.props.itemObj.image)+'.png)'}}></div>
				<div className="bottom">
					<h4 className="cancelSelect">{this.props.title.split('_').join(' ')}</h4>
				</div>
			</div>
		)
	}
}
module.exports = Item;