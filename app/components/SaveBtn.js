var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
class SaveBtn extends React.Component {
	constructor(props) {
		super(props);
		this.state={className:'to-items cta', linkTo:'large-items'}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		this.props.save();
		if(this.state.className=='to-items cta'){
			console.log('test')
			//TO DO:Check to make sure one cat is selected first, display span in save button
			this.setState({className:'to-boxes cta'});
		}else if(this.state.className=='to-boxes cta'){
			
		}
	}
	render() {
		return(
			<div id="save-button" className={this.state.className} onClick={this.handleClick}><Link to={this.state.linkTo}>NEXT STEP</Link>
	            <span>Your selections have been saved!</span>
          	</div>
		)
	}
}
module.exports = SaveBtn;