var React = require('react');
class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {sliderOffset:0}
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
		//console.log('slider render: ',this.props)
		if(this.props.needsSlider){
			return(
				<div className="slide-track">
					<div className="slider" onMouseDown={this.mouseDown} style={{height:(this.props.heights.containerHeight/this.props.heights.contentHeight)*this.props.heights.containerHeight-5+'px',top:this.state.sliderOffset+'px'}}></div>
				</div>
			)
		}else
			return null;
	}
	componentWillReceiveProps(nextProps) {
		
		//this.setState({needsSlider:(nextProps.containerHeight >= nextProps.contentHeight) ? false:true,containerHeight:nextProps.heights.containerHeight,contentHeight:nextProps.heights.contentHeight})	
	}
}
module.exports = Slider;