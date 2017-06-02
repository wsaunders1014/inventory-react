var React = require('react');
var Container = require('./Container');
var Category = require('./Category');
class Categories extends React.Component {
	render(){
		console.log('Categories.js render')
		return(
			<Container doneFetch={this.props.doneFetch} id={this.props.id} heading={this.props.heading} containerHeight='412' contentHeight='412'>
				{
					Object.keys(this.props.user.inventory_obj.categories).map((item,index)=>{
						if(item != 'Boxes') {
							if(this.props.user.inventory_obj.categories[item].isActive !== true)
								return <Category addCategory={this.props.addCategory} key={item} title={item} className="item animate-in" index={index}></Category>
							else
								return <Category addCategory={this.props.addCategory} key={item} title={item} className="item selected" index={index}></Category>
						}
					})
				}
			</Container>	
		)
	}
	componentDidMount() {
		
	}
}
module.exports = Categories;