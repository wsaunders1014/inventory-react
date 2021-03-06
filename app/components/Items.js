var React = require('react');
var Container = require('./Container');
var Item = require('./Item');
class Items extends React.Component {
	render(){
		return(
			<Container id={this.props.id} heading={this.props.heading} contentHeight='412' containerHeight='361'>
				{Object.keys(this.props.items).map((index)=>{
						if(this.props.items[index].category === this.props.heading )
							return <Item key={index} itemObj={this.props.items[index]} title={this.props.items[index].item_name} className="item" index={index}></Item>
					})
				}
			</Container>	
		)
	}
	componentDidMount() {
		console.log('Items Did Mount')
	}
}

module.exports = Items;