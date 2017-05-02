var React = require('react');
class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {sliderOffset:0,containerHeight:this.props.heights.containerHeight,contentHeight:this.props.heights.contentHeight}
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.x = '';
	}
	mouseDown(e){
		var parentTop = e.target.parentElement.getBoundingClientRect().top;
		var slider = e.target;
		this.x = this.mouseMove.bind(null,parentTop,slider);
		document.addEventListener('mousemove', this.x);
		document.addEventListener('mouseup', this.mouseUp);
	}
	mouseMove(parentTop,slider,e){
		var move = e.pageY-parentTop;
		if(move < 0)
			move = 0;
		else if(move >  slider.parentElement.clientHeight - slider.clientHeight)
			move = slider.parentElement.clientHeight - slider.clientHeight;
		this.setState({sliderOffset:move});
		slider.parentElement.previousSibling.style.top = -(move/(slider.parentElement.clientHeight - slider.clientHeight))*87+'%';
	}
	mouseUp(e){
		document.removeEventListener('mousemove', this.x);
		this.x='';
	    document.removeEventListener('mouseup', this.mouseUp);
	    e.preventDefault();
	}
	render(){
		const needsSlider = this.props.needsSlider;
		if(needsSlider){
			return(
				<div className="slide-track">
					<div className="slider" onMouseDown={this.mouseDown}style={{height:(this.state.containerHeight/this.state.contentHeight)*this.state.containerHeight-5+'px', top:this.state.sliderOffset+"px"}}></div>
				</div>
			)
		}else
			return null;
	}
	componentWillReceiveProps(nextProps) {
		this.setState({containerHeight:this.props.heights.containerHeight,contentHeight:this.props.heights.contentHeight})	
	}
}
module.exports = Slider;