var React = require('react');
var Items = require('../Items.js');
var Sidebar = require('../Sidebar');

var ItemsView = function(props){
	console.log(props);
	return (
		<div id="content" className="clearfix">
			<Items id="items" type="items" addItem={props.addItem} user={props.user} heading="Please <bold>Select</bold> The Categories That Apply To Your Move"/>
			<Sidebar id="sidebar" heading="Your Categories" user={props.user} />
		</div>
	);
}
module.exports = ItemsView;