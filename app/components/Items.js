var React = require('react');
var Container = require('./Container');
var Item = require('./Item');
class Items extends React.Component {
	render(){
		console.log('Items render', this.props)
		return(
			<Container id={this.props.id} heading={this.props.heading}>
				{Object.keys(this.props.items).map((index)=>{
						if(this.props.items[index].category === this.props.heading )
							return <Item key={index} itemObj={this.props.items[index]} title={this.props.items[index].item_name} className="item" index={index}></Item>
					})
				}
			</Container>	
		)
	}
}

module.exports = Items;