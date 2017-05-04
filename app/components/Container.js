var React = require('react');
var Slider = require('./Slider');
class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state= {containerHeight:412,contentHeight: 412,heading:this.props.heading}
	}
	render(){
		console.log('Container.js render')
		return (
			<div id={this.props.id} className='main' ref={(container)=>{
				this.domObj = container;
			}}>
				<div className="heading cancelSelect" dangerouslySetInnerHTML={{__html:this.props.heading}}/>
				<div className="overflow">
					<div className="holder clearfix">
						{this.props.children}
					</div>
					<Slider heights={this.state} needsSlider={(this.state.containerHeight >= this.state.contentHeight) ? false:true}></Slider>
				</div>
			</div>	
		)
	}
	componentWillReceiveProps(nextProps) {
		console.log('ContainerWillReceiveProps: '+this.domObj.children[1].firstChild.clientHeight)
		this.setState({containerHeight:this.domObj.children[1].clientHeight, contentHeight:this.domObj.children[1].firstChild.clientHeight})
	}
	componentDidMount() {
		// console.log('didMount: '+this.domObj.children[1].firstChild.clientHeight)
		// this.setState({containerHeight:this.domObj.children[1].clientHeight, contentHeight:this.domObj.children[1].firstChild.clientHeight})
	}
}

module.exports = Container;