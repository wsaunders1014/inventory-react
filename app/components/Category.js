var React = require('react');
class Category extends React.Component {
	constructor(props) {
		super(props);

		this.state = {className:this.props.className}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		this.setState({className:"item animate-out"});
		e.persist();
		var that = this;
		var e = e;
		that.props.addCategory(e.target.id.split('_').join(' '));
		setTimeout(()=>{
			
			that.setState({className:"item selected"});
		},400)
	}
	componentWillReceiveProps(nextProps) {
		console.log('Category.js will receive props')
		if(this.props.className !== nextProps.className){
			
			this.setState({className:nextProps.className})
		}
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
module.exports = Category;