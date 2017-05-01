var React = require('react');
var SideItem = require('./SideItem.js');
class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div id={this.props.id} className="sidebar">
				<div className="wrapper">
					<div className="heading cancelSelect"></div>
					<div className="overflow">
						<div className="holder">
						<ul>
						{
							Object.keys(this.props.user.inventory_obj.categories).map((item,index)=>{
								if(this.props.user.inventory_obj.categories[item].isActive)
									return <SideItem key={item} user={this.props.user} category={item} index={index}></SideItem>
							})
						}
						</ul>
						</div>
					</div>
				</div>
				<div className="back-btn"></div>
			</div>
		)
	}
	componentDidMount(){
		document.getElementById(this.props.id).children[0].children[0].innerHTML = this.props.heading;
	}
};
module.exports = Sidebar;