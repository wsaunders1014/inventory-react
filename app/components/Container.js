var React = require('react');
var Item = require('./Item');
class Container extends React.Component {
	render(){
		return (
			<div id={this.props.id} className='main'>
				<div className="heading cancelSelect"></div>
				<div className="overflow">
					<div className="holder clearfix">
						
						{
							Object.keys(this.props.user.inventory_obj.categories).map((item,index)=>{
								console.log(this.props.user.inventory_obj.categories[item].isActive)
								if(this.props.user.inventory_obj.categories[item].isActive=="true")
									return <Item key={item} title={item} className="item selected" index={index}></Item>
								else
									return <Item key={item} title={item} className="item" index={index}></Item>

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
// function populate(obj){
// 	console.log(obj)
// 	for(var x in obj.categories){
// 		if (!obj.categories.hasOwnProperty(x)) {
// 	        continue;
// 	    }
// 	    console.log(x.toString())
// 	    return (
// 	    	{console.log(x)}
// 		    <Item id={x}></Item>
// 		    //console.log(x);
// 		)
// 	}
// }
module.exports = Container;