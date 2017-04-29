var React = require('react');
var Item = require('./Item');
class Container extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	render(){
		return (
			<div id={this.props.id} className='main'>
				<div className="heading cancelSelect"></div>
				<div className="overflow">
					<div className="holder clearfix">
						{console.log(this.props)}
						{
							Object.keys(this.props.user.inventory_obj.categories).map((item,index)=>{
								if(this.props.user.inventory_obj.categories[item].isActive=="true")
									return <Item select={this.props.selectCategory} key={item} title={item} className="item selected" index={index}></Item>
								else
									return <Item select={this.props.selectCategory} key={item} title={item} className="item" index={index}></Item>

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