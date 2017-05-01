var React = require('react');
var Item = require('./Item');
class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div id={this.props.id} className='main'>
				<div className="heading cancelSelect"></div>
				<div className="overflow">
					<div className="holder clearfix">
						{
							Object.keys(this.props.user.inventory_obj.categories).map((item,index)=>{
								console.log(this.props.user.inventory_obj.categories[item].isActive)
								if(this.props.user.inventory_obj.categories[item].isActive!==true)
									return <Item selectCategory={this.props.selectCategory} key={item} title={item} className="item" index={index}></Item>
								else
									return <Item selectCategory={this.props.selectCategory} key={item} title={item} className="item selected" index={index}></Item>
							})
						}
					</div>
					<div className="slide-track"><div className="slider"></div></div>
				</div>
			</div>	
		)
	}
	componentDidMount()  {
		document.getElementById(this.props.id).children[0].innerHTML = this.props.heading;
	}
	
}

module.exports = Container;