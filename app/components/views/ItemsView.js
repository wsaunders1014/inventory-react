var React = require('react');
var Items = require('../Items.js');
var Sidebar = require('../Sidebar');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ItemsView = function(props){
	var heading = getFirstActiveCat(props.user.inventory_obj.categories);
	return (
		<div id="content" className="clearfix">
			<Items id="items" type="items" addItem={props.addItem} removeItem={props.removeItem} items={props.items} user={props.user} heading={heading} />
			<Sidebar id="sidebar" heading="Your Categories" user={props.user} left="-3.51064%" />
			<div id="back-btn" className="animate-in"><Link to="/categories"></Link></div>
		</div>
	);
}
function getFirstActiveCat(obj){
	var keys = Object.keys(obj);
	//console.log(keys);
	for(var i =0;i<keys.length;i++){
		if(obj[keys[i]].isActive){
			return keys[i];
			break;
		}
	}
}
module.exports = ItemsView;