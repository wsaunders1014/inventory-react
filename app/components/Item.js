var React = require('react');
class Item extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {className:this.props.className}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		this.props.selectCategory(e.target.id.split('_').join(' '));
		this.setState({className:"item animate-out"});
		var that = this;
		setTimeout(()=>{
			that.setState({className:"item selected"});
		},400)
	}
	render(){
		var x = -(133 * (this.props.index%4));
		var y = -(133 * Math.floor(this.props.index/4));
		return (
			<div className={this.state.className} id={this.props.title.split(' ').join('_')} onClick={this.handleClick}>
				<div className="img" style={{backgroundPosition:x+'px '+y+'px'}}></div>
				<div className="bottom">
					<h4 className="cancelSelect">{this.props.title.split('_').join(' ')}</h4>
				</div>
			</div>
		)
	}
}
module.exports = Item;