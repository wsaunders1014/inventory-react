var React = require('react');
var Container = require('./Container');
var Item = require('./Item');
class Categories extends React.Component {
	render(){
		console.log('Categories.js render')
		return(
			<Container doneFetch={this.props.doneFetch} id={this.props.id} heading={this.props.heading}>
				{
					Object.keys(this.props.user.inventory_obj.categories).map((item,index)=>{
						if(item != 'Boxes') {
							if(this.props.user.inventory_obj.categories[item].isActive!==true )
								return <Item addCategory={this.props.addCategory} key={item} title={item} className="item" index={index}></Item>
							else
								return <Item addCategory={this.props.addCategory} key={item} title={item} className="item selected" index={index}></Item>
						}
					})
				}
			</Container>	
		)
	}
}
module.exports = Categories;