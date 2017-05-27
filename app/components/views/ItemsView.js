var React = require('react');
var Items = require('../Items.js');
var Sidebar = require('../Sidebar');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ItemsView = function(props){
	console.log(props)
	return (
		<div id="content" className="clearfix">
			<Items id="items" type="items" addItem={props.addItem} removeItem={props.removeItem} items={props.items} user={props.user} heading={props.activeCat} />
			<Sidebar id="sidebar" heading="Your Categories" user={props.user} left="-3.51064%" />
			<div id="back-btn" className="animate-in"><Link to="/categories"></Link></div>
		</div>
	);
}
module.exports = ItemsView;